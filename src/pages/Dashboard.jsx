import SummaryCard from "../components/SummaryCard";
import SubscriptionCard from "../components/SubscriptionCard";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EmptyState from "../components/EmptyState";
import Badge from "../components/ui/Badge";
import { useSubscriptions } from "../context/SubscriptionContext";
import { useDeleteSubscription } from "../hooks/useDeleteSubscription";
import {
  calculateStats,
  formatCurrency,
  formatDate,
  getUpcomingRenewals,
  urgencyLabel,
  daysUntil,
} from "../utils/helpers";

export default function Dashboard() {
  const { subscriptions } = useSubscriptions();
  const {
    requestDelete,
    cancelDelete,
    confirmDelete,
    isConfirmOpen,
    targetSubscription,
  } = useDeleteSubscription();

  const stats = calculateStats(subscriptions);
  const renewals = getUpcomingRenewals(subscriptions);

  const summaryCards = [
    {
      id: "monthly-spend",
      label: "Total Monthly Spend",
      value: formatCurrency(stats.totalMonthlySpend),
      icon: "currency",
      accent: "primary",
    },
    {
      id: "active-count",
      label: "Active Subscriptions",
      value: String(stats.activeCount),
      icon: "check",
      accent: "emerald",
    },
    {
      id: "yearly-spend",
      label: "Yearly Spending",
      value: formatCurrency(stats.yearlySpending),
      icon: "calendar",
      accent: "violet",
    },
  ];

  return (
    <>
      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summaryCards.map((stat) => (
            <SummaryCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              accent={stat.accent}
            />
          ))}
        </div>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Upcoming Renewals
            </h2>
            {renewals.length > 0 && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
                {renewals.length} soon
              </span>
            )}
          </div>
          {renewals.length === 0 ? (
            <EmptyState
              title="No renewals in the next 3 days"
              description="You're all caught up for now."
            />
          ) : (
            <div className="space-y-2">
              {renewals.map((renewal) => {
                const days = daysUntil(renewal.nextBillingDate);
                return (
                  <div
                    key={renewal.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-amber-200/60 bg-amber-50/50 px-4 py-3 dark:border-amber-900/40 dark:bg-amber-950/20"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium text-slate-900 dark:text-white">
                          {renewal.name}
                        </p>
                        <Badge category={renewal.category}>{renewal.category}</Badge>
                      </div>
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                        Renews {formatDate(renewal.nextBillingDate)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {formatCurrency(renewal.price)}
                      </p>
                      <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
                        {urgencyLabel(days)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Recent Subscriptions
          </h2>
          {subscriptions.length === 0 ? (
            <EmptyState
              title="No subscriptions found"
              description="Add a subscription to start tracking your spending."
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {subscriptions.slice(0, 3).map((sub) => (
                <SubscriptionCard
                  key={sub.id}
                  subscription={sub}
                  onDelete={requestDelete}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <ConfirmDeleteModal
        isOpen={isConfirmOpen}
        subscriptionName={targetSubscription?.name}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
}
