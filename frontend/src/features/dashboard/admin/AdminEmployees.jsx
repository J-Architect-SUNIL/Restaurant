import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, CheckCircle2, ChevronRight, Clock3, Mail, Search, ShieldCheck, Users, X } from 'lucide-react';
import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const initialUsers = [
  { id: 1, name: 'Aarav Reddy', email: 'aarav@example.com', phone: '+91 98765 43210', status: 'User' },
  { id: 2, name: 'Jason Miller', email: 'jason@example.com', phone: '+91 98765 11223', status: 'User' },
  { id: 3, name: 'Ryan Hughes', email: 'ryan@example.com', phone: '+91 99001 22334', status: 'User' },
];

const initialEmployees = [
  { id: 4, name: 'Rebecca Wilson', email: 'rebecca@feliciano.com', phone: '+91 98450 77665', jobTitle: 'Head Chef', status: 'Active' },
  { id: 5, name: 'Kharl Bryant', email: 'kharl@feliciano.com', phone: '+91 98450 33441', jobTitle: 'Chef', status: 'Active' },
  { id: 6, name: 'Luke Simon', email: 'luke@feliciano.com', phone: '+91 98450 77601', jobTitle: 'Waiter', status: 'Active' },
];

const initialApplications = [
  {
    id: 'EMP-3021',
    name: 'Arjun Mehta',
    email: 'arjun.mehta@example.com',
    phone: '+91 98220 34567',
    submitted: 'Today, 9:35 AM',
    status: 'Pending review',
    details: { address: '18, Lake View Road, Mysuru', jobTitle: 'Kitchen team lead', experience: '3 years as a kitchen team lead', emergencyContact: '+91 98220 34568' },
  },
  {
    id: 'EMP-3020',
    name: 'Nina Thomas',
    email: 'nina.thomas@example.com',
    phone: '+91 98440 90876',
    submitted: 'Yesterday, 2:05 PM',
    status: 'Pending review',
    details: { address: '7, Richmond Town, Bengaluru', jobTitle: 'Guest service', experience: '2 years in guest service', emergencyContact: '+91 98440 90877' },
  },
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

const AdminEmployees = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const section = location.pathname.split('/').pop();
  const activeSection = ['applications', 'team'].includes(section) ? section : 'overview';
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const [employees, setEmployees] = useState(initialEmployees);
  const [applications, setApplications] = useState(initialApplications);
  const [inviteUser, setInviteUser] = useState(null);
  const [formApplication, setFormApplication] = useState(null);
  const [formDetails, setFormDetails] = useState({ name: '', email: '', phone: '', address: '', jobTitle: '', experience: '', emergencyContact: '' });
  const [reviewApplication, setReviewApplication] = useState(null);
  const [notice, setNotice] = useState('');

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return users.filter((user) => !query || `${user.name} ${user.email} ${user.phone}`.toLowerCase().includes(query));
  }, [search, users]);

  const pendingApplications = applications.filter((application) => application.status === 'Pending review');
  const goTo = (destination) => navigate(destination === 'overview' ? '/dashboard/admin/employees' : `/dashboard/admin/employees/${destination}`);

  const sendInvitation = (event) => {
    event.preventDefault();
    if (!inviteUser) return;
    const application = {
      id: `EMP-${Date.now().toString().slice(-4)}`,
      name: inviteUser.name,
      email: inviteUser.email,
      phone: inviteUser.phone,
      submitted: 'Form sent just now',
      status: 'Form sent',
      details: { address: 'Awaiting applicant response', jobTitle: 'Awaiting applicant response', experience: 'Awaiting applicant response', emergencyContact: 'Awaiting applicant response' },
    };
    setApplications((current) => [application, ...current]);
    setInviteUser(null);
    setNotice(`Employee application form sent to ${application.email}.`);
    goTo('applications');
  };

  const submitApplication = (event) => {
    event.preventDefault();
    if (!formApplication) return;
    setApplications((current) => current.map((application) => application.id === formApplication.id
      ? {
          ...application,
          name: formDetails.name,
          email: formDetails.email,
          phone: formDetails.phone,
          submitted: 'Submitted just now',
          status: 'Pending review',
          details: {
            address: formDetails.address,
            jobTitle: formDetails.jobTitle,
            experience: formDetails.experience,
            emergencyContact: formDetails.emergencyContact,
          },
        }
      : application));
    setFormApplication(null);
    setFormDetails({ name: '', email: '', phone: '', address: '', jobTitle: '', experience: '', emergencyContact: '' });
    setNotice('The employee application was submitted for review.');
  };

  const decideApplication = (applicationId, status) => {
    const application = applications.find((item) => item.id === applicationId);
    if (!application) return;
    setApplications((current) => current.map((item) => item.id === applicationId ? { ...item, status } : item));
    if (status === 'Approved') {
      setEmployees((current) => {
        const alreadyAdded = current.some((employee) => employee.email === application.email);
        const employee = {
          id: Date.now(),
          name: application.name,
          email: application.email,
          phone: application.phone,
          jobTitle: application.details.jobTitle,
          status: 'Active',
        };
        return alreadyAdded
          ? current.map((item) => item.email === application.email ? { ...item, ...employee } : item)
          : [...current, employee];
      });
      setUsers((current) => current.filter((user) => user.email !== application.email));
    }
    setReviewApplication(null);
    setNotice(`${application.name}'s employee application was ${status.toLowerCase()}.`);
  };

  const toggleEmployeeStatus = (employeeId) => {
    setEmployees((current) => current.map((employee) => employee.id === employeeId
      ? { ...employee, status: employee.status === 'Active' ? 'Inactive' : 'Active' }
      : employee));
  };

  const pageInfo = {
    overview: ['Team overview', 'Manage employee invitations, applications, and staff access.'],
    applications: ['Employee applications', 'Review submitted employee forms and approve or reject access.'],
    team: ['Team access', 'View your employees and activate or suspend their access.'],
  }[activeSection];

  const renderUsers = (people, emptyMessage) => (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-175 text-left">
          <thead className="bg-stone-50 text-[11px] uppercase tracking-wider text-stone-400">
            <tr>
              <th className="px-5 py-3 font-semibold">User</th>
              <th className="px-5 py-3 font-semibold">Phone</th>
              <th className="px-5 py-3 font-semibold">Account</th>
              <th className="px-5 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-sm">
            {people.map((user) => (
              <tr key={user.id} className="hover:bg-stone-50/70">
                <td className="px-5 py-4"><p className="font-semibold text-stone-800">{user.name}</p><p className="mt-0.5 text-xs text-stone-500">{user.email}</p></td>
                <td className="px-5 py-4 text-stone-600">{user.phone}</td>
                <td className="px-5 py-4"><StatusBadge>{user.status === 'User' ? 'Registered user' : user.status}</StatusBadge></td>
                <td className="px-5 py-4">
                  {user.status === 'User' ? (
                    <button type="button" onClick={() => setInviteUser(user)} className="rounded-md bg-[#D4AF37] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#c29f2f]">Invite as employee</button>
                  ) : (
                    <button type="button" onClick={() => toggleEmployeeStatus(user.id)} className="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50">{user.status === 'Active' ? 'Suspend access' : 'Restore access'}</button>
                  )}
                </td>
              </tr>
            ))}
            {people.length === 0 && <tr><td colSpan="4" className="px-5 py-10 text-center text-sm text-stone-500">{emptyMessage}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-170 text-left">
          <thead className="bg-stone-50 text-[11px] uppercase tracking-wider text-stone-400">
            <tr>
              <th className="px-5 py-3 font-semibold">Applicant</th>
              <th className="px-5 py-3 font-semibold">Submitted</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-sm">
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-stone-50/70">
                <td className="px-5 py-4"><p className="font-semibold text-stone-800">{application.name}</p><p className="mt-0.5 text-xs text-stone-500">{application.email}</p></td>
                <td className="px-5 py-4 text-stone-500">{application.submitted}</td>
                <td className="px-5 py-4"><StatusBadge>{application.status}</StatusBadge></td>
                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (application.status === 'Form sent') {
                        setFormApplication(application);
                        setFormDetails({ name: application.name, email: application.email, phone: application.phone, address: '', jobTitle: '', experience: '', emergencyContact: '' });
                      } else setReviewApplication(application);
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-[#9A7620] hover:text-[#6f5413]"
                  >
                    {application.status === 'Form sent' ? 'Open emailed form' : application.status === 'Pending review' ? 'Review' : 'View details'} <ChevronRight size={15} />
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && <tr><td colSpan="4" className="px-5 py-10 text-center text-sm text-stone-500">No employee applications yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-360 space-y-7 pb-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <DashboardPageHeader title={pageInfo[0]} subtitle="Admin · Employees" description={pageInfo[1]} />
        <span className="flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 md:self-auto"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Staff access controls</span>
      </div>

      {notice && <div role="status" className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"><span className="flex items-center gap-2"><CheckCircle2 size={17} />{notice}</span><button type="button" onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={17} /></button></div>}

      {activeSection === 'overview' && (
        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Registered users', value: users.length, note: 'Eligible for employee invitation', icon: Users },
              { label: 'Active employees', value: employees.filter((employee) => employee.status === 'Active').length, note: 'With active team access', icon: ShieldCheck },
              { label: 'Pending applications', value: pendingApplications.length, note: 'Waiting for your review', icon: Clock3 },
            ].map(({ label, value, note, icon: Icon }) => <div key={label} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><span className="text-sm font-medium text-stone-500">{label}</span><span className="rounded-lg bg-[#D4AF37]/10 p-2 text-[#9A7620]"><Icon size={18} /></span></div><p className="mt-4 text-3xl font-semibold text-stone-900">{value}</p><p className="mt-1 text-xs text-stone-500">{note}</p></div>)}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <section className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4"><div><h2 className="font-semibold text-stone-900">Applications needing review</h2><p className="mt-1 text-xs text-stone-500">Check details before granting employee access.</p></div><button type="button" onClick={() => goTo('applications')} className="text-sm font-semibold text-[#9A7620] hover:underline">View all</button></div>
              <div className="divide-y divide-stone-100">
                {pendingApplications.slice(0, 3).map((application) => <button key={application.id} type="button" onClick={() => setReviewApplication(application)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-stone-50"><span><span className="block text-sm font-semibold text-stone-800">{application.name}</span><span className="mt-1 block text-xs text-stone-500">Employee application · {application.submitted}</span></span><ChevronRight size={17} className="shrink-0 text-stone-400" /></button>)}
                {pendingApplications.length === 0 && <p className="px-5 py-8 text-center text-sm text-stone-500">You are all caught up.</p>}
              </div>
            </section>
            <section className="rounded-xl bg-[#111111] p-6 text-white shadow-sm"><div className="flex items-center gap-3"><span className="rounded-xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]"><ShieldCheck size={22} /></span><div><h2 className="font-semibold">Employee access</h2><p className="text-xs text-stone-400">Approval-based staff management</p></div></div><div className="mt-6 space-y-4 text-sm"><p className="text-stone-300">Invite an existing registered user to complete an employee application.</p><p className="text-stone-300">Review their contact, address, job title, experience, and emergency details.</p><p className="text-stone-300">Only approval grants employee access to the restaurant dashboard.</p></div><button type="button" onClick={() => goTo('team')} className={`${buttonClass} mt-7 bg-[#D4AF37] text-stone-950 hover:bg-[#c29f2f]`}>Manage team <ChevronRight size={16} /></button></section>
          </div>
        </section>
      )}

      {activeSection === 'applications' && <section className="space-y-4"><div><h2 className="text-lg font-semibold text-stone-900">Employee applications</h2><p className="mt-1 text-sm text-stone-500">Review submitted forms and approve or reject employee access.</p></div>{renderApplications()}</section>}

      {activeSection === 'team' && <section className="space-y-5"><div><h2 className="text-lg font-semibold text-stone-900">Registered users</h2><p className="mt-1 text-sm text-stone-500">Search by name, email, or phone to invite someone to apply.</p></div><label className="relative block w-full sm:max-w-sm"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search name or phone" className="w-full rounded-lg border border-stone-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15" /></label>{renderUsers(filteredUsers, 'No users match that search.')}<div className="space-y-3"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold text-stone-900">Employees</h2><span className="text-xs text-stone-500">{employees.length} team members</span></div>{renderUsers(employees, 'No employees have been approved yet.')}</div></section>}

      {inviteUser && <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setInviteUser(null); }}><div role="dialog" aria-modal="true" aria-labelledby="invite-employee-title" className="max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">Application invitation</p><h2 id="invite-employee-title" className="mt-1 text-xl font-semibold text-stone-900">Invite as employee</h2><p className="mt-2 text-sm text-stone-500">Send {inviteUser.name} an employee application form.</p></div><button type="button" onClick={() => setInviteUser(null)} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button></div><form onSubmit={sendInvitation} className="mt-6 space-y-4"><div><label htmlFor="employee-invite-email" className="mb-1.5 block text-sm font-medium text-stone-700">Email address</label><input id="employee-invite-email" type="email" value={inviteUser.email} readOnly className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-600" /></div><p className="rounded-lg bg-stone-50 p-3 text-xs leading-5 text-stone-600">Employee access is not granted by sending this form. The applicant must submit their details, then you must approve the application.</p><div className="flex justify-end gap-2 pt-2"><button type="button" onClick={() => setInviteUser(null)} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Cancel</button><button type="submit" className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}><Mail size={16} /> Send form</button></div></form></div></div>}

      {formApplication && <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setFormApplication(null); }}><div role="dialog" aria-modal="true" aria-labelledby="employee-form-title" className="max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">Feliciano team application</p><h2 id="employee-form-title" className="mt-1 text-xl font-semibold text-stone-900">Complete employee details</h2><p className="mt-2 text-sm text-stone-500">Applicant: {formApplication.name}</p></div><button type="button" onClick={() => setFormApplication(null)} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button></div><form onSubmit={submitApplication} className="mt-6 space-y-4"><div><label htmlFor="employee-applicant-name" className="mb-1.5 block text-sm font-medium text-stone-700">Full name</label><input id="employee-applicant-name" required value={formDetails.name} onChange={(event) => setFormDetails((current) => ({ ...current, name: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" /></div><div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="employee-applicant-email" className="mb-1.5 block text-sm font-medium text-stone-700">Email address</label><input id="employee-applicant-email" required type="email" value={formDetails.email} onChange={(event) => setFormDetails((current) => ({ ...current, email: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" /></div><div><label htmlFor="employee-applicant-phone" className="mb-1.5 block text-sm font-medium text-stone-700">Phone number</label><input id="employee-applicant-phone" required type="tel" value={formDetails.phone} onChange={(event) => setFormDetails((current) => ({ ...current, phone: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" /></div></div><div><label htmlFor="employee-applicant-job" className="mb-1.5 block text-sm font-medium text-stone-700">Applying for</label><select id="employee-applicant-job" required value={formDetails.jobTitle} onChange={(event) => setFormDetails((current) => ({ ...current, jobTitle: event.target.value }))} className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]"><option value="">Select a position</option><option>Manager</option><option>Head Chef</option><option>Chef</option><option>Waiter</option><option>Host</option></select></div><div><label htmlFor="employee-applicant-address" className="mb-1.5 block text-sm font-medium text-stone-700">Current address</label><textarea id="employee-applicant-address" required rows="2" value={formDetails.address} onChange={(event) => setFormDetails((current) => ({ ...current, address: event.target.value }))} className="w-full resize-y rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" /></div><div><label htmlFor="employee-applicant-experience" className="mb-1.5 block text-sm font-medium text-stone-700">Relevant experience</label><textarea id="employee-applicant-experience" required rows="2" value={formDetails.experience} onChange={(event) => setFormDetails((current) => ({ ...current, experience: event.target.value }))} className="w-full resize-y rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" /></div><div><label htmlFor="employee-applicant-emergency" className="mb-1.5 block text-sm font-medium text-stone-700">Emergency contact</label><input id="employee-applicant-emergency" required type="tel" value={formDetails.emergencyContact} onChange={(event) => setFormDetails((current) => ({ ...current, emergencyContact: event.target.value }))} className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]" /></div><p className="text-xs leading-5 text-stone-500">Submitting this form sends it to your admin for review. Access is granted only after approval.</p><div className="flex justify-end gap-2 pt-2"><button type="button" onClick={() => setFormApplication(null)} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Cancel</button><button type="submit" className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}>Submit application</button></div></form></div></div>}

      {reviewApplication && <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setReviewApplication(null); }}><div role="dialog" aria-modal="true" aria-labelledby="employee-review-title" className="max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">{reviewApplication.id} · Employee application</p><h2 id="employee-review-title" className="mt-1 text-xl font-semibold text-stone-900">Review applicant</h2></div><button type="button" onClick={() => setReviewApplication(null)} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button></div><div className="mt-5 grid gap-4 sm:grid-cols-2">{[['Full name', reviewApplication.name], ['Email', reviewApplication.email], ['Phone', reviewApplication.phone], ['Applying for', reviewApplication.details.jobTitle], ['Address', reviewApplication.details.address], ['Relevant experience', reviewApplication.details.experience], ['Emergency contact', reviewApplication.details.emergencyContact]].map(([label, value]) => <div key={label} className="rounded-lg bg-stone-50 p-3"><p className="text-xs font-medium text-stone-500">{label}</p><p className="mt-1 text-sm font-medium text-stone-800">{value}</p></div>)}</div><div className="mt-6 flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">{reviewApplication.status === 'Pending review' ? <><button type="button" onClick={() => decideApplication(reviewApplication.id, 'Rejected')} className={`${buttonClass} border border-red-200 text-red-700 hover:bg-red-50`}><X size={15} /> Reject application</button><button type="button" onClick={() => decideApplication(reviewApplication.id, 'Approved')} className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}><Check size={16} /> Approve & grant access</button></> : <div className="flex w-full items-center justify-between"><StatusBadge>{reviewApplication.status}</StatusBadge><button type="button" onClick={() => setReviewApplication(null)} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Close</button></div>}</div></div></div>}
    </div>
  );
};

export default AdminEmployees;
