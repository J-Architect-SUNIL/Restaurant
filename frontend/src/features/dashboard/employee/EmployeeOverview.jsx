import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const EmployeeOverview = () => {
  const stats = [
    { label: 'Bookings today', value: 4 },
    { label: 'Seated now', value: 1 },
    { label: 'Open orders', value: 4 },
    { label: 'Free tables', value: 3 },
  ];

  const queueItems = [
    { id: '1051', table: 'T2', dish: 'Pad Thai with Tofu, Avocado Toast', minutes: 4, status: 'Pending' },
    { id: '1050', table: 'T4', dish: 'Grilled Salmon Steak', minutes: 11, status: 'Preparing' },
    { id: '1049', table: 'T1', dish: 'Crispy Buttermilk Chicken ×2', minutes: 17, status: 'Preparing' },
  ];

  const nextBooking = { guest: 'Jason M.', guests: 2, time: '19:30', table: 'T5' };

  return (
    <div className="space-y-8 pb-10 text-[#1A1A1A]">
      <DashboardPageHeader
        title="Welcome"
        subtitle="Hello, Rebecca"
        description="Your shift, today's bookings and the kitchen at a glance."
      />

      <div className="rounded-2xl bg-[#111111] px-8 py-7 text-white shadow-lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-semibold text-[#D4AF37] sm:text-3xl">Tuesday&apos;s shift</p>
            <div className="mt-4 text-3xl font-bold">11:00 – 19:00</div>
            <p className="mt-2 text-stone-300">You haven&apos;t clocked in yet</p>
          </div>
          <button
            type="button"
            className="self-start rounded-xl bg-[#D4AF37] px-7 py-3 text-lg font-semibold text-[#1A1A1A] shadow-sm transition hover:bg-[#c89b2d]"
          >
            Clock in
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-stone-200 bg-[#F8F5F0] px-4 py-5 text-center shadow-sm">
            <div className="text-4xl font-bold text-[#1A1A1A]">{stat.value}</div>
            <div className="mt-2 text-sm text-stone-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-5 shadow-sm">
          <h3 className="text-3xl font-bold mb-4">Kitchen queue</h3>
          <div className="space-y-4">
            {queueItems.map((item) => (
              <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-2xl font-bold text-[#1A1A1A]">#{item.id} <span className="text-lg font-medium text-stone-500">· T{item.table}</span></div>
                  <div className="text-sm text-stone-500">{item.minutes} min</div>
                </div>
                <div className="mt-2 text-stone-600">{item.dish}</div>
                <button
                  type="button"
                  className={`mt-3 rounded-lg px-4 py-2 text-sm font-semibold ${
                    item.status === 'Pending'
                      ? 'bg-[#D4AF37] text-[#1A1A1A]'
                      : 'bg-[#D4AF37] text-[#1A1A1A]'
                  }`}
                >
                  {item.status === 'Pending' ? 'Start preparing' : 'Mark ready'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-5 shadow-sm">
          <h3 className="text-3xl font-bold mb-4">Next booking</h3>
          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <div className="text-2xl font-bold">{nextBooking.guest} <span className="text-lg font-medium text-stone-500">· {nextBooking.guests} guests</span></div>
            <div className="mt-2 text-xl text-stone-600">{nextBooking.time} · table T5</div>
            <div className="mt-5 flex gap-3">
              <button type="button" className="flex-1 rounded-xl bg-[#D4AF37] px-4 py-3 font-semibold text-[#1A1A1A]">Seat</button>
              <button type="button" className="flex-1 rounded-xl border border-[#D4AF37] bg-transparent px-4 py-3 font-semibold text-[#D4AF37]">No-show</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview;
