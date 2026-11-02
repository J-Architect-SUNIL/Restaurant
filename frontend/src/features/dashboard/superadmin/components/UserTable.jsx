import { StatusBadge } from './SuperadminShared';

function UserTable({ users, onPromote, onToggleStatus }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-180 text-left">
        <thead className="bg-stone-50 text-[11px] uppercase tracking-wider text-stone-400">
          <tr>
            <th className="px-5 py-3 font-semibold">User</th>
            <th className="px-5 py-3 font-semibold">Phone</th>
            <th className="px-5 py-3 font-semibold">Access</th>
            <th className="px-5 py-3 font-semibold">Status</th>
            <th className="px-5 py-3 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100 text-sm">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-stone-50/70">
              <td className="px-5 py-4">
                <p className="font-semibold text-stone-800">{user.name}</p>
                <p className="mt-0.5 text-xs text-stone-500">{user.email}</p>
              </td>
              <td className="px-5 py-4 text-stone-600">{user.phone}</td>
              <td className="px-5 py-4"><StatusBadge>{user.role}</StatusBadge></td>
              <td className="px-5 py-4"><StatusBadge>{user.status}</StatusBadge></td>
              <td className="px-5 py-4">
                {user.role === 'User' ? (
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => onPromote(user, 'Admin')} className="rounded-md bg-[#D4AF37] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#c29f2f]">
                      Invite as admin
                    </button>
                    <button type="button" onClick={() => onPromote(user, 'Employee')} className="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50">
                      Invite as employee
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => onToggleStatus(user.id)} className="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50">
                    {user.status === 'Active' ? 'Suspend access' : 'Restore access'}
                  </button>
                )}
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr><td colSpan="5" className="px-5 py-10 text-center text-sm text-stone-500">No users match that search.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function UserTableCard(props) {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <UserTable {...props} />
    </div>
  );
}
