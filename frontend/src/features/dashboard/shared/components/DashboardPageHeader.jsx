const DashboardPageHeader = ({ title, subtitle, description, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && (
        <h1 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className="text-lg font-semibold text-[#1A1A1A] sm:text-xl">
          {subtitle}
        </h2>
      )}
      {description && <p className="text-sm text-stone-500">{description}</p>}
    </div>
  );
};

export default DashboardPageHeader;
