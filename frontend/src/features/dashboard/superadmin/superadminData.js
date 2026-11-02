export const initialUsers = [
  { id: 1, name: 'Aarav Reddy', email: 'aarav@example.com', phone: '+91 98765 43210', joined: '2 Mar 2026', role: 'User', status: 'Active' },
  { id: 2, name: 'Jason Miller', email: 'jason@example.com', phone: '+91 98765 11223', joined: '18 Apr 2026', role: 'User', status: 'Active' },
  { id: 3, name: 'Ryan Hughes', email: 'ryan@example.com', phone: '+91 99001 22334', joined: '9 May 2026', role: 'User', status: 'Active' },
  { id: 4, name: 'Rebecca Wilson', email: 'rebecca@example.com', phone: '+91 98450 77665', joined: '12 May 2026', role: 'Employee', status: 'Active' },
  { id: 5, name: 'Sunil Kumar', email: 'sunil@example.com', phone: '+91 98100 55667', joined: '4 Jan 2026', role: 'Admin', status: 'Active' },
];

export const initialRequests = [
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

export const superadminTabs = [
  { id: 'overview', label: 'Overview', icon: 'Activity' },
  { id: 'users', label: 'Users & access', icon: 'Users' },
  { id: 'requests', label: 'Applications', icon: 'Clock3' },
  { id: 'team', label: 'Team access', icon: 'ShieldCheck' },
];

export const initialFormDetails = {
  name: '',
  email: '',
  phone: '',
  address: '',
  experience: '',
  emergencyContact: '',
};

export const superadminOverviewHeader = {
  title: 'Welcome back',
  subtitle: 'Hello, Super Admin',
  description: 'Your users, access applications and team at a glance.',
};
