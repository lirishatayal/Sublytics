import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { formatCurrency, formatDate } from "../utils/helpers";

const categoryIcons = {
  Entertainment: "🎬",
  Productivity: "⚡",
  Music: "🎵",
  "Cloud Storage": "☁️",
  Fitness: "💪",
  News: "📰",
  Other: "📦",
};

export default function SubscriptionCard({ subscription, onDelete }) {
  const { id, name, price, billingCycle, nextBillingDate, category } = subscription;
  const icon = categoryIcons[category] || categoryIcons.Other;

  return (
    <Card hover className="group relative">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg dark:bg-slate-800">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-slate-900 dark:text-white">{name}</h3>
          <Badge category={category}>{category}</Badge>
        </div>
        {onDelete && (
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(id)}
            className="opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
            aria-label={`Delete ${name}`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </Button>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Price</p>
          <p className="mt-0.5 text-lg font-semibold text-slate-900 dark:text-white">
            {formatCurrency(price)}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Billing</p>
          <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            {billingCycle}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Next billing
          </p>
          <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            {formatDate(nextBillingDate)}
          </p>
        </div>
      </div>
    </Card>
  );
}
