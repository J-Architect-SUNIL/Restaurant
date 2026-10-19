import StatusTag from '../../shared/components/StatusTag';

export default function OrderRow({ id, price, date, items, status }) {
  return (
    <article className="bg-white p-4 rounded-xl border border-stone-200/80 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">
          #{id} – ₹{price}
        </h3>
        <p className="text-xs text-stone-500">{date} · {items}</p>
      </div>
      <div className="flex items-center gap-4">
        <StatusTag status={status} />
        <button className="text-xs font-medium text-[#1A1A1A] border border-stone-300 px-3 py-1.5 rounded-lg hover:bg-stone-50 transition-colors">
          Order again
        </button>
      </div>
    </article>
  );
}