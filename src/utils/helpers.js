export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function daysUntil(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateString + "T00:00:00");
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

export function urgencyLabel(days) {
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `In ${days} days`;
}

export function toMonthlyAmount(price, billingCycle) {
  return billingCycle === "Yearly" ? price / 12 : price;
}

export function toYearlyAmount(price, billingCycle) {
  return billingCycle === "Yearly" ? price : price * 12;
}

export function calculateStats(subscriptions) {
  const totalMonthlySpend = subscriptions.reduce(
    (sum, sub) => sum + toMonthlyAmount(sub.price, sub.billingCycle),
    0
  );
  const yearlySpending = subscriptions.reduce(
    (sum, sub) => sum + toYearlyAmount(sub.price, sub.billingCycle),
    0
  );

  return {
    totalMonthlySpend,
    activeCount: subscriptions.length,
    yearlySpending,
  };
}

export function getUpcomingRenewals(subscriptions, withinDays = 3) {
  return subscriptions
    .filter((sub) => {
      const days = daysUntil(sub.nextBillingDate);
      return days >= 0 && days <= withinDays;
    })
    .sort((a, b) => new Date(a.nextBillingDate) - new Date(b.nextBillingDate));
}

export function generateId() {
  return crypto.randomUUID();
}
