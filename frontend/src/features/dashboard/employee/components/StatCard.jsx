const StatCard = ({ label, value }) => {
  return (
    <article className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex-1">
      <dl>
        <dt className="text-xs text-stone-500 font-medium">{label}</dt>
        <dd className="text-2xl font-semibold text-[#1A1A1A] mb-1">{value}</dd>
      </dl>
    </article>
  );
};

export default StatCard;