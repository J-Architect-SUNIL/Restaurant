import { ArrowUpRight, Check, ChevronRight, Clock3, Shield, ShieldCheck, Users } from 'lucide-react';
import { buttonClass } from './SuperadminShared';

function SuperadminOverview({
  userCount,
  activeAdminCount,
  activeEmployeeCount,
  pendingRequests,
  onReview,
  onNavigate,
}) {
  const stats = [
    { label: 'Registered users', value: userCount, note: 'Across all account types', icon: Users },
    { label: 'Active admins', value: activeAdminCount, note: 'Full restaurant access', icon: ShieldCheck },
    { label: 'Active employees', value: activeEmployeeCount, note: 'Staff accounts', icon: Users },
    { label: 'Pending applications', value: pendingRequests.length, note: 'Awaiting your review', icon: Clock3 },
  ];
  const policies = [
    'Anyone can register and sign in as a user.',
    'Admin and employee access requires an application and your approval.',
    'Only approved applications receive elevated access.',
  ];

  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, note, icon: Icon }) => (
          <div key={label} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-500">{label}</span>
              <span className="rounded-lg bg-[#D4AF37]/10 p-2 text-[#9A7620]"><Icon size={18} /></span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-stone-900">{value}</p>
            <p className="mt-1 text-xs text-stone-500">{note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <section className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
            <div>
              <h2 className="font-semibold text-stone-900">Applications needing review</h2>
              <p className="mt-1 text-xs text-stone-500">Review submitted details before granting access.</p>
            </div>
            <button type="button" onClick={() => onNavigate('applications')} className="text-sm font-semibold text-[#9A7620] hover:underline">View all</button>
          </div>
          <div className="divide-y divide-stone-100">
            {pendingRequests.slice(0, 3).map((request) => (
              <button key={request.id} type="button" onClick={() => onReview(request)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-stone-50">
                <span>
                  <span className="block text-sm font-semibold text-stone-800">{request.name}</span>
                  <span className="mt-1 block text-xs text-stone-500">{request.requestedRole} application · {request.submitted}</span>
                </span>
                <ChevronRight size={17} className="shrink-0 text-stone-400" />
              </button>
            ))}
            {pendingRequests.length === 0 && <p className="px-5 py-8 text-center text-sm text-stone-500">You are all caught up.</p>}
          </div>
        </section>

        <section className="rounded-xl bg-[#111111] p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]"><Shield size={22} /></span>
            <div>
              <h2 className="font-semibold">Access policy</h2>
              <p className="text-xs text-stone-400">Role-based account control</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            {policies.map((policy) => (
              <div key={policy} className="flex items-start gap-3">
                <Check size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                <p className="text-stone-300">{policy}</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => onNavigate('users')} className={`${buttonClass} mt-7 bg-[#D4AF37] text-stone-950 hover:bg-[#c29f2f]`}>
            Find a user <ArrowUpRight size={16} />
          </button>
        </section>
      </div>
    </section>
  );
}

export default SuperadminOverview;
