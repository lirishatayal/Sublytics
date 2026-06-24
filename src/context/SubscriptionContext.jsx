import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { initialSubscriptions, STORAGE_KEY } from "../data/mockData";

const SubscriptionContext = createContext(null);

function loadSubscriptions() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // fall through to defaults
  }
  return initialSubscriptions;
}

export function SubscriptionProvider({ children }) {
  const [subscriptions, setSubscriptions] = useState(loadSubscriptions);
  const [lastDeletedSubscription, setLastDeletedSubscription] = useState(null);
  const [showUndoSnackbar, setShowUndoSnackbar] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
  }, [subscriptions]);

  useEffect(() => {
    if (!showUndoSnackbar) return;
    const timer = setTimeout(() => setShowUndoSnackbar(false), 4000);
    return () => clearTimeout(timer);
  }, [showUndoSnackbar]);

  const removeSubscription = useCallback((id) => {
    let deleted = null;
    setSubscriptions((prev) => {
      deleted = prev.find((sub) => sub.id === id) ?? null;
      if (!deleted) return prev;
      return prev.filter((sub) => sub.id !== id);
    });
    if (deleted) {
      setLastDeletedSubscription(deleted);
      setShowUndoSnackbar(true);
    }
  }, []);

  const undoDelete = useCallback(() => {
    setLastDeletedSubscription((deleted) => {
      if (!deleted) return null;
      setSubscriptions((prev) => {
        if (prev.some((sub) => sub.id === deleted.id)) return prev;
        return [...prev, deleted];
      });
      setShowUndoSnackbar(false);
      return null;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== "z" || e.shiftKey) return;

      const target = e.target;
      const tag = target.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        target.isContentEditable
      ) {
        return;
      }

      e.preventDefault();
      undoDelete();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undoDelete]);

  const addSubscription = useCallback((subscription) => {
    setSubscriptions((prev) => [...prev, subscription]);
    setLastDeletedSubscription(null);
    setShowUndoSnackbar(false);
  }, []);

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptions,
        lastDeletedSubscription,
        showUndoSnackbar,
        removeSubscription,
        undoDelete,
        addSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscriptions() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscriptions must be used within SubscriptionProvider");
  }
  return context;
}
