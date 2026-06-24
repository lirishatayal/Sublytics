import SubscriptionCard from "../components/SubscriptionCard";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EmptyState from "../components/EmptyState";
import { useSubscriptions } from "../context/SubscriptionContext";
import { useDeleteSubscription } from "../hooks/useDeleteSubscription";

export default function Subscriptions() {
  const { subscriptions } = useSubscriptions();
  const {
    requestDelete,
    cancelDelete,
    confirmDelete,
    isConfirmOpen,
    targetSubscription,
  } = useDeleteSubscription();

  return (
    <>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          All Subscriptions
        </h2>
        {subscriptions.length === 0 ? (
          <EmptyState
            title="No subscriptions found"
            description="Add a subscription to get started."
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {subscriptions.map((sub) => (
              <SubscriptionCard
                key={sub.id}
                subscription={sub}
                onDelete={requestDelete}
              />
            ))}
          </div>
        )}
      </section>

      <ConfirmDeleteModal
        isOpen={isConfirmOpen}
        subscriptionName={targetSubscription?.name}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
}
