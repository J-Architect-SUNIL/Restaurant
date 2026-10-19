export default function NextTableCard() {
  return (
    <article className="bg-[#1C1814] text-white p-6 rounded-2xl flex items-center justify-between shadow-lg">
      <div>
        <h3 className="font-serif text-[#D4AF37] text-lg mb-1">Your next table</h3>
        <p className="text-xl font-medium tracking-tight mb-2">Sat, 24 Oct, 2026, 19:30</p>
        <p className="text-xs text-stone-400">4 guests · Confirmed · Window table</p>
      </div>
      <button className="bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
        Manage reservation
      </button>
    </article>
  );
}