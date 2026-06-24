export default function Card({ children, className = "", hover = false, ...props }) {
  return (
    <div
      className={`rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
        hover
          ? "transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-700 dark:hover:shadow-slate-900/50"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
