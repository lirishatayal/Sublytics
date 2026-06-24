import { useState } from "react";
import { useSubscriptions } from "../context/SubscriptionContext";

export function useDeleteSubscription() {
  const { subscriptions, removeSubscription } = useSubscriptions();
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const targetSubscription = subscriptions.find((sub) => sub.id === deleteTargetId);

  const requestDelete = (id) => setDeleteTargetId(id);
  const cancelDelete = () => setDeleteTargetId(null);

  const confirmDelete = () => {
    if (deleteTargetId) {
      removeSubscription(deleteTargetId);
      setDeleteTargetId(null);
    }
  };

  return {
    deleteTargetId,
    targetSubscription,
    requestDelete,
    cancelDelete,
    confirmDelete,
    isConfirmOpen: Boolean(deleteTargetId),
  };
}
