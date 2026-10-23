const StatusTag = ({ status }) => {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
      {status}
    </span>
  );
};

export default StatusTag;