const categoryColors = {
  Entertainment: "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300",
  Productivity: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
  Music: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300",
  "Cloud Storage": "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300",
  Fitness: "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
  News: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  Other: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
};

export default function Badge({ children, category }) {
  const colorClass = categoryColors[category] || categoryColors.Other;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
    >
      {children}
    </span>
  );
}
