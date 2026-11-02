export const employeeOverviewHeader = {
  title: 'Welcome back',
  subtitle: 'Hello, Rebecca',
  description: 'Your shift, bookings and kitchen orders at a glance.',
};

export const employeeOverviewStats = [
  { label: 'Bookings today', value: 4 },
  { label: 'Seated now', value: 1 },
  { label: 'Open orders', value: 4 },
  { label: 'Free tables', value: 3 },
];

export const employeeOverviewQueue = [
  { id: '1051', table: 'T2', dish: 'Pad Thai with Tofu, Avocado Toast', minutes: 4, status: 'Pending' },
  { id: '1050', table: 'T4', dish: 'Grilled Salmon Steak', minutes: 11, status: 'Preparing' },
  { id: '1049', table: 'T1', dish: 'Crispy Buttermilk Chicken ×2', minutes: 17, status: 'Preparing' },
];

export const employeeNextBooking = { guest: 'Jason M.', guests: 2, time: '19:30', table: 'T5' };

export const employeeShift = {
  title: 'Tuesday’s shift',
  hours: '11:00 – 19:00',
  status: 'You haven’t clocked in yet',
};

export const initialEmployeeQueue = [
  ...employeeOverviewQueue,
  { id: '1048', table: 'T6', dish: 'Banana Oat Porridge', minutes: 22, status: 'Ready' },
];

export const employeeSchedule = [
  { day: 'Monday', shift: '11:00 – 19:00' },
  { day: 'Tuesday', shift: '11:00 – 19:00', isToday: true },
  { day: 'Wednesday', shift: 'Off' },
  { day: 'Thursday', shift: '14:00 – 22:00' },
  { day: 'Friday', shift: '14:00 – 23:30' },
  { day: 'Saturday', shift: '14:00 – 23:30' },
  { day: 'Sunday', shift: 'Off' },
];

export const initialTables = [
  { id: 'T1', seats: 2, status: 'Occupied' },
  { id: 'T2', seats: 4, status: 'Occupied' },
  { id: 'T3', seats: 4, status: 'Reserved' },
  { id: 'T4', seats: 2, status: 'Occupied' },
  { id: 'T5', seats: 2, status: 'Reserved' },
  { id: 'T6', seats: 6, status: 'Occupied' },
  { id: 'T7', seats: 4, status: 'Free' },
  { id: 'T8', seats: 10, status: 'Reserved' },
  { id: 'T9', seats: 2, status: 'Free' },
  { id: 'T10', seats: 4, status: 'Free' },
];

export const tableStatusStyles = {
  Occupied: 'border-red-500 text-red-700',
  Reserved: 'border-yellow-500 text-yellow-700',
  Free: 'border-emerald-500 text-emerald-700',
};

export const employeeProfile = {
  name: 'Rebecca Wilson',
  role: 'Head Chef',
  email: 'rebecca@feliciano.com',
  phone: '+91 90000 66666',
};
