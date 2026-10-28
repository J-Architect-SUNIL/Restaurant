const nextTableData = {
  heading: 'Your next table',
  dateTime: 'Sat, 24 Oct, 2026, 19:30',
  details: '4 guests · Confirmed · Window table',
  actionLabel: 'Manage reservation',
};

const NextTableCard = () => {
  return (
    <article className="bg-[#1C1814] text-white p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg">
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">{nextTableData.heading}</h3>
        <p className="text-lg sm:text-xl font-medium tracking-tight mb-2">{nextTableData.dateTime}</p>
        <p className="text-xs text-stone-400">{nextTableData.details}</p>
      </div>
      <button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
        {nextTableData.actionLabel}
      </button>
    </article>
  );
};

export default NextTableCard;