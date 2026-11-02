export const adminOverviewHeader = {
  title: 'Welcome back',
  subtitle: 'Hello, Sunil',
  description: 'Your restaurant performance, reservations and orders at a glance.',
};

export const adminOverviewStats = [
  { label: 'Order revenue', value: '₹1,248' },
  { label: 'Orders', value: '5' },
  { label: 'Reservations today', value: '3' },
  { label: 'Active guests', value: '3' },
];

export const adminWeeklyRevenue = [
  { day: 'Mon', amount: '14.2k', height: '60%' },
  { day: 'Tue', amount: '11.8k', height: '50%' },
  { day: 'Wed', amount: '12.9k', height: '55%' },
  { day: 'Thu', amount: '15.4k', height: '68%' },
  { day: 'Fri', amount: '22.1k', height: '85%' },
  { day: 'Sat', amount: '24.8k', height: '95%' },
  { day: 'Sun', amount: '18.3k', height: '75%' },
];

export const adminPendingAttention = [
  { name: 'Ryan H.', guests: '4 guests', date: '24 Oct 2026, 13:00' },
  { name: 'Mark S.', guests: '10 guests', date: '24 Oct 2026, 20:30' },
  { name: 'Aarav Reddy', guests: '2 guests', date: '8 Nov 2026, 13:00' },
];

export const initialAdminOrders = [
  { id: '#1051', guest: 'Aarav Reddy', items: 'Pad Thai with Tofu, Avocado Toast', total: '₹249', status: 'Pending' },
  { id: '#1050', guest: 'Jason M.', items: 'Grilled Salmon Steak', total: '₹199', status: 'Preparing' },
  { id: '#1049', guest: 'Ryan H.', items: 'Crispy Buttermilk Chicken ×2', total: '₹600', status: 'Ready' },
  { id: '#1048', guest: 'Priya N.', items: 'Banana Oat Porridge', total: '₹200', status: 'Delivered' },
  { id: '#1047', guest: 'Mark S.', items: 'Grilled Halloumi Salad', total: '₹99', status: 'Cancelled' },
];

const adminOrderStatusClasses = {
  Pending: 'bg-amber-100 text-amber-700 border-amber-300',
  Preparing: 'bg-amber-50 text-amber-600 border-amber-200',
  Ready: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export const adminLatestOrders = initialAdminOrders.slice(0, 3).map((order) => ({
  ...order,
  statusClass: adminOrderStatusClasses[order.status],
}));

export const initialAdminUsers = [
  { id: 1, name: 'Aarav Reddy', email: 'aarav@example.com', joined: '2 Mar 2026', status: 'Active' },
  { id: 2, name: 'Jason M.', email: 'jason@example.com', joined: '18 Apr 2026', status: 'Active' },
  { id: 3, name: 'Ryan H.', email: 'ryan@example.com', joined: '9 May 2026', status: 'Active' },
  { id: 4, name: 'Spam Bot', email: 'bot@spam.test', joined: '30 Sept 2026', status: 'Blocked' },
];

export const initialMenuDishes = [
  {
    id: 1,
    name: 'Pad Thai with Tofu',
    ingredients: 'Rice noodles, Tofu, Peanuts, Spring onion',
    price: 150,
    status: 'Available',
  },
  {
    id: 2,
    name: 'Grilled Halloumi Salad',
    ingredients: 'Halloumi, Spinach, Cucumber, Cranberries',
    price: 99,
    status: 'Available',
  },
];

export const initialOpeningHours = [
  { day: 'Monday', opens: '11:00', closes: '22:00' },
  { day: 'Tuesday', opens: '11:00', closes: '22:00' },
  { day: 'Wednesday', opens: '11:00', closes: '22:00' },
  { day: 'Thursday', opens: '11:00', closes: '22:00' },
  { day: 'Friday', opens: '11:00', closes: '23:30' },
  { day: 'Saturday', opens: '11:00', closes: '23:30' },
  { day: 'Sunday', opens: '11:00', closes: '22:00' },
];

export const initialRestaurantContact = {
  phone: '+1 (555) 012-3456',
  email: 'info@yourdomain.com',
};

export const initialEmployeeUsers = [
  { id: 1, name: 'Aarav Reddy', email: 'aarav@example.com', phone: '+91 98765 43210', status: 'User' },
  { id: 2, name: 'Jason Miller', email: 'jason@example.com', phone: '+91 98765 11223', status: 'User' },
  { id: 3, name: 'Ryan Hughes', email: 'ryan@example.com', phone: '+91 99001 22334', status: 'User' },
];

export const initialEmployees = [
  { id: 4, name: 'Rebecca Wilson', email: 'rebecca@feliciano.com', phone: '+91 98450 77665', jobTitle: 'Head Chef', status: 'Active' },
  { id: 5, name: 'Kharl Bryant', email: 'kharl@feliciano.com', phone: '+91 98450 33441', jobTitle: 'Chef', status: 'Active' },
  { id: 6, name: 'Luke Simon', email: 'luke@feliciano.com', phone: '+91 98450 77601', jobTitle: 'Waiter', status: 'Active' },
];

export const initialEmployeeApplications = [
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

export const initialEmployeeFormDetails = {
  name: '',
  email: '',
  phone: '',
  address: '',
  jobTitle: '',
  experience: '',
  emergencyContact: '',
};

export const employeeManagementPageInfo = {
  overview: ['Team overview', 'Manage employee invitations, applications, and staff access.'],
  applications: ['Employee applications', 'Review submitted employee forms and approve or reject access.'],
  team: ['Team access', 'View your employees and activate or suspend their access.'],
};

export const employeeManagementStats = [
  { label: 'Registered users', note: 'Eligible for employee invitation', icon: 'Users' },
  { label: 'Active employees', note: 'With active team access', icon: 'ShieldCheck' },
  { label: 'Pending applications', note: 'Waiting for your review', icon: 'Clock3' },
];
