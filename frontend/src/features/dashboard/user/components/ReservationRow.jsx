import StatusTag from '../../shared/components/StatusTag';

const reservationRowLabels = {
  cancel: 'Cancel',
};

const ReservationRow = ({ id, dateTime, guests, status, onCancel }) => {
  return (
    <article className="bg-white p-4 rounded-xl border border-stone-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm">
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">
          {dateTime}
        </h3>
        <p className="text-xs text-stone-500">{guests} guests</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <StatusTag status={status} />
        {status.toLowerCase() === 'pending' && (
          <button 
            onClick={onCancel}
            className="text-xs font-medium text-red-600 border border-stone-300 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
          >
            {reservationRowLabels.cancel}
          </button>
        )}
      </div>
    </article>
  );
};

export default ReservationRow;