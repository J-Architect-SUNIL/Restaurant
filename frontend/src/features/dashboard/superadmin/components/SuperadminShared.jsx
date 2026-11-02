export const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50';

export function StatusBadge({ children }) {
  const styles = children === 'Active' || children === 'Approved'
    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
    : children === 'Inactive' || children === 'Rejected'
      ? 'border-stone-200 bg-stone-100 text-stone-600'
      : 'border-amber-200 bg-amber-50 text-amber-700';

  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}>{children}</span>;
}

export function Dialog({ labelledBy, onClose, children, size = 'max-w-lg' }) {
  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`max-h-[calc(100vh-2rem)] w-full ${size} overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl`}
      >
        {children}
      </div>
    </div>
  );
}
