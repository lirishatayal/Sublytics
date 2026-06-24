function getUndoShortcutLabel() {
  return navigator.platform.includes("Mac") ? "Cmd+Z" : "Ctrl+Z";
}

export default function UndoSnackbar({ visible, onUndo }) {
  if (!visible) return null;

  const shortcut = getUndoShortcutLabel();

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <p className="text-sm text-slate-700 dark:text-slate-300">
        Subscription deleted. Press{" "}
        <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300">
          {shortcut}
        </kbd>{" "}
        to undo
      </p>
      <button
        type="button"
        onClick={onUndo}
        className="shrink-0 rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-700"
      >
        Undo
      </button>
    </div>
  );
}
