import { Search } from 'lucide-react';
import { UserTableCard } from './UserTable';

export function UsersSection({ search, onSearchChange, users, onPromote, onToggleStatus }) {
  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-stone-900">Find registered users</h2>
          <p className="mt-1 text-sm text-stone-500">Search by name, email, or phone number to begin an access request.</p>
        </div>
        <label className="relative block w-full sm:max-w-sm">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            type="search"
            placeholder="Search name or phone"
            className="w-full rounded-lg border border-stone-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15"
          />
        </label>
      </div>
      <UserTableCard users={users} onPromote={onPromote} onToggleStatus={onToggleStatus} />
      <p className="text-xs text-stone-500">Sending a form does not grant access. The applicant must submit it and you must approve the application.</p>
    </section>
  );
}

export function TeamSection({ users, onPromote, onToggleStatus }) {
  const teams = [
    { role: 'Admin', title: 'Administrators', empty: 'No administrators have been approved yet.' },
    { role: 'Employee', title: 'Employees', empty: 'No employees have been approved yet.' },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-stone-900">Team access</h2>
        <p className="mt-1 text-sm text-stone-500">View active administrators and employees, and suspend or restore access.</p>
      </div>
      {teams.map(({ role, title, empty }) => {
        const people = users.filter((user) => user.role === role);

        return (
          <div key={role} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-stone-800">{title}</h3>
              <span className="text-xs text-stone-500">{people.length} account{people.length === 1 ? '' : 's'}</span>
            </div>
            {people.length > 0
              ? <UserTableCard users={people} onPromote={onPromote} onToggleStatus={onToggleStatus} />
              : <div className="rounded-xl border border-dashed border-stone-300 bg-white px-5 py-8 text-center text-sm text-stone-500">{empty}</div>}
          </div>
        );
      })}
    </section>
  );
}
