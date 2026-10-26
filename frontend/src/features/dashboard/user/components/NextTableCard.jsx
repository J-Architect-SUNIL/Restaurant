const nextTableData = {
  heading: 'Your next table',
  dateTime: 'Sat, 24 Oct, 2026, 19:30',
  details: '4 guests · Confirmed · Window table',
  actionLabel: 'Manage reservation',
};

const NextTableCard = () => {
  return (
    <article className="bg-[#1C1814] text-white p-6 rounded-2xl flex items-center justify-between shadow-lg">
      <div>
        <h3 className="font-serif text-[#D4AF37] text-lg mb-1">{nextTableData.heading}</h3>
        <p className="text-xl font-medium tracking-tight mb-2">{nextTableData.dateTime}</p>
        <p className="text-xs text-stone-400">{nextTableData.details}</p>
      </div>
      <button className="bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
        {nextTableData.actionLabel}
      </button>
    </article>
  );
};

export default NextTableCard;