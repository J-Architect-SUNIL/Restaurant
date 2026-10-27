import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const schedule = [
  { day: 'Monday', shift: '11:00 – 19:00' },
  { day: 'Tuesday', shift: '11:00 – 19:00', isToday: true },
  { day: 'Wednesday', shift: 'Off' },
  { day: 'Thursday', shift: '14:00 – 22:00' },
  { day: 'Friday', shift: '14:00 – 23:30' },
  { day: 'Saturday', shift: '14:00 – 23:30' },
  { day: 'Sunday', shift: 'Off' },
];

const EmployeeSchedule = () => {
  return (
    <div className="space-y-8 pb-10">
      <DashboardPageHeader
        title="Shifts"
        subtitle="My schedule"
        description="This week's shifts and time-off requests."
      />

      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[#F8F5F0] shadow-sm">
        <div className="grid grid-cols-[1fr_1fr] border-b border-stone-200 bg-white/80 text-sm font-semibold uppercase tracking-wider text-stone-500">
          <div className="px-6 py-4">Day</div>
          <div className="px-6 py-4">Shift</div>
        </div>

        {schedule.map((entry) => (
          <div
            key={entry.day}
            className={`grid grid-cols-[1fr_1fr] border-b border-stone-200 last:border-b-0 ${entry.isToday ? 'bg-[#f3ead5]' : 'bg-transparent'}`}
          >
            <div className="px-6 py-5 text-2xl font-bold text-[#1A1A1A]">
              {entry.day}
              {entry.isToday && <span className="ml-3 text-sm font-medium text-stone-500">Today</span>}
            </div>
            <div className="flex items-center justify-start px-6 py-5 text-2xl font-medium text-[#1A1A1A]">{entry.shift}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-5 shadow-sm">
        <h3 className="text-3xl font-bold mb-4">Request time off</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-stone-600">Date</label>
            <input
              type="date"
              className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base text-[#1A1A1A] focus:border-[#D4AF37] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Reason</label>
            <input
              type="text"
              placeholder="Family function"
              className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base text-[#1A1A1A] focus:border-[#D4AF37] outline-none"
            />
          </div>
        </div>
        <button type="button" className="mt-5 rounded-xl bg-[#D4AF37] px-6 py-3 text-lg font-semibold text-[#1A1A1A] hover:bg-[#c89b2d]">
          Send request
        </button>
      </div>
    </div>
  );
};

export default EmployeeSchedule;
