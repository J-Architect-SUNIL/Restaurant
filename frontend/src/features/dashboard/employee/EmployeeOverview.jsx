import DashboardPageHeader from './components/DashboardPageHeader';
import {
  employeeOverviewHeader,
  employeeNextBooking,
  employeeOverviewQueue,
  employeeOverviewStats,
  employeeShift,
} from './employeeData';

const EmployeeOverview = () => {
  return (
    <div className="max-w-5xl space-y-8 pb-10 text-[#1A1A1A]">
      <DashboardPageHeader
        title={employeeOverviewHeader.title}
        subtitle={employeeOverviewHeader.subtitle}
        description={employeeOverviewHeader.description}
      />

      <div className="rounded-2xl bg-[#111111] px-8 py-7 text-white shadow-lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#D4AF37] sm:text-xl">{employeeShift.title}</p>
            <div className="mt-2 text-2xl font-bold">{employeeShift.hours}</div>
            <p className="mt-1 text-sm text-stone-300">{employeeShift.status}</p>
          </div>
          <button
            type="button"
            className="self-start rounded-xl bg-[#D4AF37] px-6 py-2.5 text-base font-semibold text-[#1A1A1A] shadow-sm transition hover:bg-[#c89b2d]"
          >
            Clock in
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {employeeOverviewStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-stone-200 bg-[#F8F5F0] px-4 py-5 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#1A1A1A]">{stat.value}</div>
            <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-5 shadow-sm">
          <h4 className="font-semibold text-lg text-[#1A1A1A] mb-4">Kitchen queue</h4>
          <div className="space-y-4">
            {employeeOverviewQueue.map((item) => (
              <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-base font-bold text-[#1A1A1A]">#{item.id} <span className="text-sm font-medium text-stone-500">· T{item.table}</span></div>
                  <div className="text-xs text-stone-500">{item.minutes} min</div>
                </div>
                <div className="mt-1 text-sm text-stone-600">{item.dish}</div>
                <button
                  type="button"
                  className="mt-3 rounded-lg bg-[#D4AF37] px-3.5 py-2 text-xs font-semibold text-[#1A1A1A]"
                >
                  {item.status === 'Pending' ? 'Start preparing' : 'Mark ready'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-5 shadow-sm">
          <h4 className="font-semibold text-lg text-[#1A1A1A] mb-4">Next booking</h4>
          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <div className="text-base font-bold">{employeeNextBooking.guest} <span className="text-sm font-medium text-stone-500">· {employeeNextBooking.guests} guests</span></div>
            <div className="mt-1 text-sm text-stone-600">{employeeNextBooking.time} · table {employeeNextBooking.table}</div>
            <div className="mt-4 flex gap-3">
              <button type="button" className="flex-1 rounded-xl bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#1A1A1A]">Seat</button>
              <button type="button" className="flex-1 rounded-xl border border-[#D4AF37] bg-transparent px-4 py-2 text-sm font-semibold text-[#D4AF37]">No-show</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview;