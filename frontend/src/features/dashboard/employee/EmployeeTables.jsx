import { useState } from 'react';
import DashboardPageHeader from './components/DashboardPageHeader';
import { initialTables, tableStatusStyles } from './employeeData';

const EmployeeTables = () => {
  const [tables, setTables] = useState(initialTables);

  const handleStatusChange = (tableId, nextStatus) => {
    setTables((prev) => prev.map((table) => (table.id === tableId ? { ...table, status: nextStatus } : table)));
  };

  return (
    <div className="space-y-8 pb-10">
      <DashboardPageHeader
        title="Floor"
        subtitle="Tables"
        description="Tap a status to update a table."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`rounded-xl border bg-[#F8F5F0] p-4 shadow-sm ${tableStatusStyles[table.status]}`}
          >
            <div className="text-4xl font-bold text-[#1A1A1A]">{table.id}</div>
            <div className="mt-2 text-lg text-stone-500">{table.seats} seats</div>
            <label className="mt-4 block text-sm text-stone-600">
              <select
                value={table.status}
                onChange={(e) => handleStatusChange(table.id, e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-base text-[#1A1A1A] outline-none focus:border-[#D4AF37]"
              >
                <option value="Occupied">Occupied</option>
                <option value="Reserved">Reserved</option>
                <option value="Free">Free</option>
              </select>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTables;
