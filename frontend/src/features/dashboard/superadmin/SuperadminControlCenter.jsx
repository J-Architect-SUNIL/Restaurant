import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Mail,
  Search,
  Shield,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const initialUsers = [
  { id: 1, name: 'Aarav Reddy', email: 'aarav@example.com', phone: '+91 98765 43210', joined: '2 Mar 2026', role: 'User', status: 'Active' },
  { id: 2, name: 'Jason Miller', email: 'jason@example.com', phone: '+91 98765 11223', joined: '18 Apr 2026', role: 'User', status: 'Active' },
  { id: 3, name: 'Ryan Hughes', email: 'ryan@example.com', phone: '+91 99001 22334', joined: '9 May 2026', role: 'User', status: 'Active' },
  { id: 4, name: 'Rebecca Wilson', email: 'rebecca@example.com', phone: '+91 98450 77665', joined: '12 May 2026', role: 'Employee', status: 'Active' },
  { id: 5, name: 'Sunil Kumar', email: 'sunil@example.com', phone: '+91 98100 55667', joined: '4 Jan 2026', role: 'Admin', status: 'Active' },
];

const initialRequests = [
  {
    id: 'REQ-2048',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98760 12456',
    requestedRole: 'Admin',
    submitted: 'Today, 10:42 AM',
    status: 'Pending review',
    details: { address: '24, Green Park, Bengaluru', experience: '5 years in restaurant operations', emergencyContact: '+91 98760 12457' },
  },
  {
    id: 'REQ-2047',
    name: 'Arjun Mehta',
    email: 'arjun.mehta@example.com',
    phone: '+91 98220 34567',
    requestedRole: 'Employee',
    submitted: 'Yesterday, 4:18 PM',
    status: 'Pending review',
    details: { address: '18, Lake View Road, Mysuru', experience: '3 years as a kitchen team lead', emergencyContact: '+91 98220 34568' },
  },
  {
    id: 'REQ-2046',
    name: 'Nina Thomas',
    email: 'nina.thomas@example.com',
    phone: '+91 98440 90876',
    requestedRole: 'Employee',
    submitted: '28 Oct 2026, 2:05 PM',
    status: 'Approved',
    details: { address: '7, Richmond Town, Bengaluru', experience: '2 years in guest service', emergencyContact: '+91 98440 90877' },
  },
];

const tabs = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'users', label: 'Users & access', icon: Users },
  { id: 'requests', label: 'Applications', icon: Clock3 },
  { id: 'team', label: 'Team access', icon: ShieldCheck },
];

const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50';

function StatusBadge({ children }) {
  const styles = children === 'Active' || children === 'Approved'
    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
    : children === 'Inactive' || children === 'Rejected'
      ? 'border-stone-200 bg-stone-100 text-stone-600'
      : 'border-amber-200 bg-amber-50 text-amber-700';

  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}>{children}</span>;
}

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

const SuperadminControlCenter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const section = location.pathname.split('/').pop();
  const activeTab = section === 'applications'
    ? 'requests'
    : ['users', 'team'].includes(section)
      ? section
      : 'overview';
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [formRequest, setFormRequest] = useState(null);
  const [formDetails, setFormDetails] = useState({ name: '', email: '', phone: '', address: '', experience: '', emergencyContact: '' });
  const [inviteUser, setInviteUser] = useState(null);
  const [inviteRole, setInviteRole] = useState('Admin');
  const [notice, setNotice] = useState('');

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return users;
    return users.filter((user) => `${user.name} ${user.email} ${user.phone}`.toLowerCase().includes(query));
  }, [search, users]);

  const pendingRequests = requests.filter((request) => request.status === 'Pending review');
  const activeAdmins = users.filter((user) => user.role === 'Admin' && user.status === 'Active');
  const activeEmployees = users.filter((user) => user.role === 'Employee' && user.status === 'Active');
  const activeSection = tabs.find((tab) => tab.id === activeTab);
  const navigateToSection = (sectionId) => {
    navigate(sectionId === 'overview' ? '/dashboard/superadmin' : `/dashboard/superadmin/${sectionId}`);
  };

  const startInvite = (user, requestedRole) => {
    setInviteUser(user);
    setInviteRole(requestedRole);
  };

  const sendApplication = (event) => {
    event.preventDefault();
    if (!inviteUser) return;
    const newRequest = {
      id: `REQ-${Date.now().toString().slice(-4)}`,
      name: inviteUser.name,
      email: inviteUser.email,
      phone: inviteUser.phone,
      requestedRole: inviteRole,
      submitted: 'Form sent just now',
      status: 'Form sent',
      details: { address: 'Awaiting applicant response', experience: 'Awaiting applicant response', emergencyContact: 'Awaiting applicant response' },
    };
    setRequests((current) => [newRequest, ...current]);
    setInviteUser(null);
    setNotice(`Application form sent to ${newRequest.email}.`);
    navigateToSection('applications');
  };

  const reviewRequest = (requestId, status) => {
    const request = requests.find((item) => item.id === requestId);
    if (!request) return;
    setRequests((current) => current.map((item) => item.id === requestId ? { ...item, status } : item));
    if (status === 'Approved') {
      setUsers((current) => {
        const existingUser = current.some((user) => user.email === request.email);
        if (existingUser) {
          return current.map((user) => user.email === request.email
            ? { ...user, role: request.requestedRole, status: 'Active' }
            : user);
        }
        return [...current, {
          id: Date.now(),
          name: request.name,
          email: request.email,
          phone: request.phone,
          joined: 'Today',
          role: request.requestedRole,
          status: 'Active',
        }];
      });
    }
    setSelectedRequest(null);
    setNotice(`${request.name}'s application was ${status.toLowerCase()}.`);
  };

  const submitApplicationForm = (event) => {
    event.preventDefault();
    if (!formRequest) return;
    setRequests((current) => current.map((request) => request.id === formRequest.id
      ? {
          ...request,
          name: formDetails.name,
          email: formDetails.email,
          phone: formDetails.phone,
          details: {
            address: formDetails.address,
            experience: formDetails.experience,
            emergencyContact: formDetails.emergencyContact,
          },
          status: 'Pending review',
          submitted: 'Submitted just now',
        }
      : request));
    setFormRequest(null);
    setFormDetails({ name: '', email: '', phone: '', address: '', experience: '', emergencyContact: '' });
    setNotice('The application form was submitted for your review.');
  };

  const toggleUserStatus = (userId) => {
    setUsers((current) => current.map((user) => user.id === userId
      ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
      : user));
  };

  const renderUsers = (list) => (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <UserTable users={list} onPromote={startInvite} onToggleStatus={toggleUserStatus} />
    </div>
  );

  const renderRequests = (requestsToShow) => (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-170 text-left">
          <thead className="bg-stone-50 text-[11px] uppercase tracking-wider text-stone-400">
            <tr>
              <th className="px-5 py-3 font-semibold">Applicant</th>
              <th className="px-5 py-3 font-semibold">Requested access</th>
              <th className="px-5 py-3 font-semibold">Submitted</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-sm">
            {requestsToShow.map((request) => (
              <tr key={request.id} className="hover:bg-stone-50/70">
                <td className="px-5 py-4">
                  <p className="font-semibold text-stone-800">{request.name}</p>
                  <p className="mt-0.5 text-xs text-stone-500">{request.email}</p>
                </td>
                <td className="px-5 py-4 text-stone-700">{request.requestedRole}</td>
                <td className="px-5 py-4 text-stone-500">{request.submitted}</td>
                <td className="px-5 py-4"><StatusBadge>{request.status}</StatusBadge></td>
                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (request.status === 'Form sent') {
                        setFormRequest(request);
                        setFormDetails({
                          name: request.name,
                          email: request.email,
                          phone: request.phone,
                          address: '',
                          experience: '',
                          emergencyContact: '',
                        });
                      } else {
                        setSelectedRequest(request);
                      }
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-[#9A7620] hover:text-[#6f5413]"
                  >
                    {request.status === 'Pending review' ? 'Review' : request.status === 'Form sent' ? 'Open emailed form' : 'View details'} <ChevronRight size={15} />
                  </button>
                </td>
              </tr>
            ))}
            {requestsToShow.length === 0 && (
              <tr><td colSpan="5" className="px-5 py-10 text-center text-sm text-stone-500">No applications to show.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-360 space-y-7 pb-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <DashboardPageHeader
          title={activeSection.label}
          subtitle="Superadmin"
          description={{
            overview: 'Manage people, roles, and restaurant access.',
            users: 'Search registered users and start access applications.',
            requests: 'Review submitted forms and approve or reject role access.',
            team: 'Manage access for administrators and employees.',
          }[activeTab]}
        />
        <div className="flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 md:self-auto">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> All systems operational
        </div>
      </div>

      {notice && (
        <div role="status" className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <span className="flex items-center gap-2"><CheckCircle2 size={17} />{notice}</span>
          <button type="button" onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={17} /></button>
        </div>
      )}

      {activeTab === 'overview' && (
        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Registered users', value: users.length, note: 'Across all account types', icon: Users },
              { label: 'Active admins', value: activeAdmins.length, note: 'Full restaurant access', icon: ShieldCheck },
              { label: 'Active employees', value: activeEmployees.length, note: 'Staff accounts', icon: Users },
              { label: 'Pending applications', value: pendingRequests.length, note: 'Awaiting your review', icon: Clock3 },
            ].map(({ label, value, note, icon: Icon }) => (
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
                <button type="button" onClick={() => navigateToSection('applications')} className="text-sm font-semibold text-[#9A7620] hover:underline">View all</button>
              </div>
              <div className="divide-y divide-stone-100">
                {pendingRequests.slice(0, 3).map((request) => (
                  <button key={request.id} type="button" onClick={() => setSelectedRequest(request)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-stone-50">
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
                <div className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" /><p className="text-stone-300">Anyone can register and sign in as a user.</p></div>
                <div className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" /><p className="text-stone-300">Admin and employee access requires an application and your approval.</p></div>
                <div className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" /><p className="text-stone-300">Only approved applications receive elevated access.</p></div>
              </div>
              <button type="button" onClick={() => navigateToSection('users')} className={`${buttonClass} mt-7 bg-[#D4AF37] text-stone-950 hover:bg-[#c29f2f]`}>
                Find a user <ArrowUpRight size={16} />
              </button>
            </section>
          </div>
        </section>
      )}

      {activeTab === 'users' && (
        <section className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-stone-900">Find registered users</h2>
              <p className="mt-1 text-sm text-stone-500">Search by name, email, or phone number to begin an access request.</p>
            </div>
            <label className="relative block w-full sm:max-w-sm">
              <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search name or phone" className="w-full rounded-lg border border-stone-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15" />
            </label>
          </div>
          {renderUsers(filteredUsers)}
          <p className="text-xs text-stone-500">Sending a form does not grant access. The applicant must submit it and you must approve the application.</p>
        </section>
      )}

      {activeTab === 'requests' && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">Access applications</h2>
            <p className="mt-1 text-sm text-stone-500">Review submitted forms and approve or reject role access.</p>
          </div>
          {renderRequests(requests)}
        </section>
      )}

      {activeTab === 'team' && (
        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">Team access</h2>
            <p className="mt-1 text-sm text-stone-500">View active administrators and employees, and suspend or restore access.</p>
          </div>
          {[
            { title: 'Administrators', people: users.filter((user) => user.role === 'Admin'), empty: 'No administrators have been approved yet.' },
            { title: 'Employees', people: users.filter((user) => user.role === 'Employee'), empty: 'No employees have been approved yet.' },
          ].map(({ title, people, empty }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-stone-800">{title}</h3>
                <span className="text-xs text-stone-500">{people.length} account{people.length === 1 ? '' : 's'}</span>
              </div>
              {people.length > 0 ? renderUsers(people) : <div className="rounded-xl border border-dashed border-stone-300 bg-white px-5 py-8 text-center text-sm text-stone-500">{empty}</div>}
            </div>
          ))}
        </section>
      )}

      {inviteUser && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setInviteUser(null); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="invite-title" className="max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">Application invitation</p>
                <h2 id="invite-title" className="mt-1 text-xl font-semibold text-stone-900">Request {inviteRole.toLowerCase()} details</h2>
                <p className="mt-2 text-sm text-stone-500">We&apos;ll email a secure details form to {inviteUser.name}.</p>
              </div>
              <button type="button" onClick={() => setInviteUser(null)} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button>
            </div>
            <form onSubmit={sendApplication} className="mt-6 space-y-4">
              <div>
                <label htmlFor="invite-email" className="mb-1.5 block text-sm font-medium text-stone-700">Email address</label>
                <input id="invite-email" type="email" value={inviteUser.email} readOnly className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-600" />
              </div>
              <div>
                <label htmlFor="invite-role" className="mb-1.5 block text-sm font-medium text-stone-700">Requested role</label>
                <select id="invite-role" value={inviteRole} onChange={(event) => setInviteRole(event.target.value)} className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]">
                  <option>Admin</option>
                  <option>Employee</option>
                </select>
              </div>
              <div className="rounded-lg bg-stone-50 p-3 text-xs leading-5 text-stone-600">
                The applicant will provide their contact details, address, experience, and emergency contact. Access stays unchanged until you approve their submitted form.
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setInviteUser(null)} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Cancel</button>
                <button type="submit" className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}><Mail size={16} /> Send form</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {formRequest && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setFormRequest(null); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="application-form-title" className="max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">Feliciano team application</p>
                <h2 id="application-form-title" className="mt-1 text-xl font-semibold text-stone-900">Complete your details</h2>
                <p className="mt-2 text-sm text-stone-500">Applicant: {formRequest.name} · {formRequest.requestedRole}</p>
              </div>
              <button type="button" onClick={() => setFormRequest(null)} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button>
            </div>
            <form onSubmit={submitApplicationForm} className="mt-6 space-y-4">
              <div>
                <label htmlFor="application-name" className="mb-1.5 block text-sm font-medium text-stone-700">Full name</label>
                <input id="application-name" required type="text" value={formDetails.name} onChange={(event) => setFormDetails((current) => ({ ...current, name: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="application-email" className="mb-1.5 block text-sm font-medium text-stone-700">Email address</label>
                  <input id="application-email" required type="email" value={formDetails.email} onChange={(event) => setFormDetails((current) => ({ ...current, email: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label htmlFor="application-phone" className="mb-1.5 block text-sm font-medium text-stone-700">Phone number</label>
                  <input id="application-phone" required type="tel" value={formDetails.phone} onChange={(event) => setFormDetails((current) => ({ ...current, phone: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" />
                </div>
              </div>
              <div>
                <label htmlFor="application-address" className="mb-1.5 block text-sm font-medium text-stone-700">Current address</label>
                <textarea id="application-address" required rows="2" value={formDetails.address} onChange={(event) => setFormDetails((current) => ({ ...current, address: event.target.value }))} className="w-full resize-y rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" placeholder="Street, city, and postal code" />
              </div>
              <div>
                <label htmlFor="application-experience" className="mb-1.5 block text-sm font-medium text-stone-700">Relevant experience</label>
                <textarea id="application-experience" required rows="3" value={formDetails.experience} onChange={(event) => setFormDetails((current) => ({ ...current, experience: event.target.value }))} className="w-full resize-y rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" placeholder="Tell us about your experience" />
              </div>
              <div>
                <label htmlFor="application-emergency-contact" className="mb-1.5 block text-sm font-medium text-stone-700">Emergency contact number</label>
                <input id="application-emergency-contact" required type="tel" value={formDetails.emergencyContact} onChange={(event) => setFormDetails((current) => ({ ...current, emergencyContact: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" placeholder="+91 00000 00000" />
              </div>
              <p className="text-xs leading-5 text-stone-500">Submitting this form sends your application to the superadmin. Your account remains a user until it is approved.</p>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setFormRequest(null)} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Cancel</button>
                <button type="submit" className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}>Submit application</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedRequest && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedRequest(null); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="review-title" className="max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">{selectedRequest.id} · {selectedRequest.requestedRole} application</p>
                <h2 id="review-title" className="mt-1 text-xl font-semibold text-stone-900">Review applicant</h2>
              </div>
              <button type="button" onClick={() => setSelectedRequest(null)} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ['Full name', selectedRequest.name],
                ['Email', selectedRequest.email],
                ['Phone', selectedRequest.phone],
                ['Address', selectedRequest.details.address],
                ['Relevant experience', selectedRequest.details.experience],
                ['Emergency contact', selectedRequest.details.emergencyContact],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-stone-50 p-3">
                  <p className="text-xs font-medium text-stone-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-stone-800">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
              {selectedRequest.status === 'Pending review' ? (
                <>
                  <button type="button" onClick={() => reviewRequest(selectedRequest.id, 'Rejected')} className={`${buttonClass} border border-red-200 text-red-700 hover:bg-red-50`}><X size={15} /> Reject application</button>
                  <button type="button" onClick={() => reviewRequest(selectedRequest.id, 'Approved')} className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}><Check size={16} /> Approve & grant access</button>
                </>
              ) : (
                <div className="flex w-full items-center justify-between">
                  <StatusBadge>{selectedRequest.status}</StatusBadge>
                  <button type="button" onClick={() => setSelectedRequest(null)} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperadminControlCenter;
