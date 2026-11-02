import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardPageHeader from '../employee/components/DashboardPageHeader';
import ApplicationsTable from './components/ApplicationsTable';
import {
  ApplicationFormDialog,
  InviteDialog,
  Notice,
  ReviewDialog,
} from './components/SuperadminDialogs';
import SuperadminOverview from './components/SuperadminOverview';
import { TeamSection, UsersSection } from './components/SuperadminSections';
import {
  initialFormDetails,
  initialRequests,
  initialUsers,
  superadminOverviewHeader,
  superadminTabs,
} from './superadminData';

const descriptions = {
  overview: superadminOverviewHeader.description,
  users: 'Search registered users and start access applications.',
  requests: 'Review submitted forms and approve or reject role access.',
  team: 'Manage access for administrators and employees.',
};

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
  const [formDetails, setFormDetails] = useState(initialFormDetails);
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
  const activeSection = superadminTabs.find((tab) => tab.id === activeTab);

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

  const openApplicationForm = (request) => {
    setFormRequest(request);
    setFormDetails({
      ...initialFormDetails,
      name: request.name,
      email: request.email,
      phone: request.phone,
    });
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
    setFormDetails(initialFormDetails);
    setNotice('The application form was submitted for your review.');
  };

  const toggleUserStatus = (userId) => {
    setUsers((current) => current.map((user) => user.id === userId
      ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
      : user));
  };

  return (
    <div className="mx-auto max-w-360 space-y-7 pb-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <DashboardPageHeader
          title={activeTab === 'overview' ? superadminOverviewHeader.title : activeSection.label}
          subtitle={activeTab === 'overview' ? superadminOverviewHeader.subtitle : 'Superadmin'}
          description={descriptions[activeTab]}
        />
        <div className="flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 md:self-auto">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> All systems operational
        </div>
      </div>

      <Notice onDismiss={() => setNotice('')}>{notice}</Notice>

      {activeTab === 'overview' && (
        <SuperadminOverview
          userCount={users.length}
          activeAdminCount={activeAdmins.length}
          activeEmployeeCount={activeEmployees.length}
          pendingRequests={pendingRequests}
          onReview={setSelectedRequest}
          onNavigate={navigateToSection}
        />
      )}
      {activeTab === 'users' && (
        <UsersSection
          search={search}
          onSearchChange={setSearch}
          users={filteredUsers}
          onPromote={startInvite}
          onToggleStatus={toggleUserStatus}
        />
      )}
      {activeTab === 'requests' && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">Access applications</h2>
            <p className="mt-1 text-sm text-stone-500">Review submitted forms and approve or reject role access.</p>
          </div>
          <ApplicationsTable applications={requests} onOpenForm={openApplicationForm} onReview={setSelectedRequest} />
        </section>
      )}
      {activeTab === 'team' && (
        <TeamSection users={users} onPromote={startInvite} onToggleStatus={toggleUserStatus} />
      )}

      <InviteDialog
        user={inviteUser}
        role={inviteRole}
        onRoleChange={setInviteRole}
        onClose={() => setInviteUser(null)}
        onSubmit={sendApplication}
      />
      <ApplicationFormDialog
        request={formRequest}
        details={formDetails}
        onDetailsChange={setFormDetails}
        onClose={() => setFormRequest(null)}
        onSubmit={submitApplicationForm}
      />
      <ReviewDialog request={selectedRequest} onClose={() => setSelectedRequest(null)} onReview={reviewRequest} />
    </div>
  );
};

export default SuperadminControlCenter;
