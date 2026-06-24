import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import AddSubscriptionModal from "../AddSubscriptionModal";
import UndoSnackbar from "../UndoSnackbar";
import { useSubscriptions } from "../../context/SubscriptionContext";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { pathname } = useLocation();
  const { subscriptions, showUndoSnackbar, undoDelete } = useSubscriptions();

  const count = subscriptions.length;
  const subtitle =
    pathname === "/subscriptions"
      ? `${count} active subscription${count !== 1 ? "s" : ""}`
      : "Overview of your subscription spending";

  const title = pathname === "/subscriptions" ? "Subscriptions" : "Dashboard";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-svh bg-slate-50 dark:bg-slate-950">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Navbar
          title={title}
          subtitle={subtitle}
          onAddClick={() => setModalOpen(true)}
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <Outlet />
        </main>
      </div>

      <AddSubscriptionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <UndoSnackbar visible={showUndoSnackbar} onUndo={undoDelete} />
    </div>
  );
}
