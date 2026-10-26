import StatusTag from '../../shared/components/StatusTag';

const orderRowLabels = {
  orderAgain: 'Order again',
};

const OrderRow = ({ id, price, date, items, status }) => {
  return (
    <article className="bg-white p-4 rounded-xl border border-stone-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm">
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">
          #{id} – ₹{price}
        </h3>
        <p className="text-xs text-stone-500">{date} · {items}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <StatusTag status={status} />
        <button className="text-xs font-medium text-[#1A1A1A] border border-stone-300 px-3 py-1.5 rounded-lg hover:bg-stone-50 transition-colors">
          {orderRowLabels.orderAgain}
        </button>
      </div>
    </article>
  );
};

export default OrderRow;