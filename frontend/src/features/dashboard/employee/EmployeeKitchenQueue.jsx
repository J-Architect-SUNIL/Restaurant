import { useState } from 'react';
import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const initialQueue = [
  { id: '1051', table: 'T2', dish: 'Pad Thai with Tofu, Avocado Toast', minutes: 4, status: 'Pending' },
  { id: '1050', table: 'T4', dish: 'Grilled Salmon Steak', minutes: 11, status: 'Preparing' },
  { id: '1049', table: 'T1', dish: 'Crispy Buttermilk Chicken ×2', minutes: 17, status: 'Preparing' },
  { id: '1048', table: 'T6', dish: 'Banana Oat Porridge', minutes: 22, status: 'Ready' },
];

const EmployeeKitchenQueue = () => {
  const [queue, setQueue] = useState(initialQueue);

  const updateStatus = (id, status) => {
    setQueue((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  const pending = queue.filter((item) => item.status === 'Pending');
  const preparing = queue.filter((item) => item.status === 'Preparing');
  const ready = queue.filter((item) => item.status === 'Ready');

  const cards = [
    { title: 'Pending', items: pending, status: 'Pending' },
    { title: 'Preparing', items: preparing, status: 'Preparing' },
    { title: 'Ready', items: ready, status: 'Ready' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <DashboardPageHeader
        title="Kitchen"
        subtitle="Kitchen queue"
        description="Move each order forward as you work on it."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        {cards.map((section) => (
          <div key={section.title} className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">{section.title}</h3>
              <span className="inline-flex min-w-8 items-center justify-center rounded-full bg-stone-200 px-2 py-1 text-sm font-semibold text-stone-700">
                {section.items.length}
              </span>
            </div>

            <div className="space-y-4">
              {section.items.length === 0 ? (
                <div className="rounded-xl border border-dashed border-stone-300 bg-white/60 p-4 text-sm text-stone-500">
                  No orders here
                </div>
              ) : (
                section.items.map((item) => (
                  <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xl font-bold text-[#1A1A1A]">#{item.id} <span className="text-base font-medium text-stone-500">· T{item.table}</span></div>
                      <div className="text-sm text-stone-500">{item.minutes} min</div>
                    </div>
                    <div className="mt-2 text-stone-600">{item.dish}</div>
                    <button
                      type="button"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          section.status === 'Pending' ? 'Preparing' : section.status === 'Preparing' ? 'Ready' : 'Ready'
                        )
                      }
                      className="mt-4 w-full rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#c89b2d]"
                    >
                      {section.status === 'Pending' ? 'Start preparing' : section.status === 'Preparing' ? 'Mark ready' : 'Served'}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeKitchenQueue;
