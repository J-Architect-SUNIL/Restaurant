const userOrders = [
  {
    id: '1042',
    price: '249',
    date: 'Sun, 11 Oct, 2026',
    items: 'Pad Thai with Tofu, Avocado Toast',
    status: 'Delivered',
  },
  {
    id: '1017',
    price: '199',
    date: 'Tue, 29 Sept, 2026',
    items: 'Grilled Salmon Steak',
    status: 'Delivered',
  },
  {
    id: '0988',
    price: '500',
    date: 'Wed, 2 Sept, 2026',
    items: 'Crispy Buttermilk Chicken, Banana Oat Porridge',
    status: 'Delivered',
  },
];

export const userOverviewData = {
  welcomeHeading: 'Welcome back',
  greeting: 'Hello, Aarav',
  description: 'Your reservations, orders and favourite dishes at a glance.',
  summaryLabel: 'Account summary',
  stats: [
    { label: 'Reservations', value: '3' },
    { label: 'Orders', value: '3' },
    { label: 'Favourite dishes', value: '3' },
    { label: 'Loyalty points', value: '420' },
  ],
  recentOrdersHeading: 'Recent orders',
  orders: userOrders.slice(0, 2),
  favouritesHeading: 'Your favourites',
  favourites: [
    {
      id: 'pad-thai-with-tofu',
      title: 'Pad Thai with Tofu',
      price: '150',
      description: 'Rice noodles, Tofu, Peanuts, Spring onion',
    },
    {
      id: 'avocado-toast',
      title: 'Avocado Toast',
      price: '99',
      description: 'Sourdough, Avocado, Egg, Chili flakes',
    },
    {
      id: 'grilled-salmon-steak',
      title: 'Grilled Salmon Steak',
      price: '199',
      description: 'Salmon, Avocado, Lettuce, Cherry tomato',
    },
  ],
};

export const userOrdersData = {
  heading: 'Orders',
  title: 'My orders',
  subtitle: 'Reorder anything you’ve enjoyed before.',
  orders: userOrders,
};

export const userReservationsData = {
  heading: 'Reservations',
  title: 'My reservations',
  subtitle: 'Open every day, 11:00 AM–10:00 PM (Fri–Sat until 11:30 PM).',
  form: {
    dateLabel: 'Date',
    timeLabel: 'Time',
    guestsLabel: 'Guests',
    guestPlaceholder: 'Select number of guests',
    guestNote: 'For parties of more than 10, please contact us.',
    specialRequestLabel: 'Special request',
    specialRequestPlaceholder: 'Birthday, window table, allergies',
    submitLabel: 'Make a reservation',
  },
  allReservationsHeading: 'All reservations',
  reservations: [
    {
      id: 'res-1',
      dateTime: 'Sun, 8 Nov, 2026, 13:00',
      guests: '2',
      status: 'Pending',
    },
    {
      id: 'res-2',
      dateTime: 'Sat, 24 Oct, 2026, 19:30',
      guests: '4',
      status: 'Confirmed',
    },
  ],
};

export const userFavouritesData = {
  heading: 'Favourites',
  title: 'Favourite dishes',
  subtitle: 'Save dishes from our menu for quick ordering.',
  dishes: [
    {
      id: 'pad-thai-with-tofu',
      title: 'Pad Thai with Tofu',
      price: '150',
      description: 'Rice noodles, Tofu, Peanuts, Spring onion',
      isFavourite: true,
    },
    {
      id: 'grilled-halloumi-salad',
      title: 'Grilled Halloumi Salad',
      price: '99',
      description: 'Halloumi, Spinach, Cucumber, Cranberries',
      isFavourite: false,
    },
    {
      id: 'banana-oat-porridge',
      title: 'Banana Oat Porridge',
      price: '200',
      description: 'Oats, Banana, Flaxseed, Honey',
      isFavourite: false,
    },
    {
      id: 'crispy-buttermilk-chicken',
      title: 'Crispy Buttermilk Chicken',
      price: '300',
      description: 'Chicken, Buttermilk, Parsley, Lemon',
      isFavourite: false,
    },
    {
      id: 'avocado-toast',
      title: 'Avocado Toast',
      price: '99',
      description: 'Sourdough, Avocado, Egg, Chili flakes',
      isFavourite: true,
    },
    {
      id: 'grilled-salmon-steak',
      title: 'Grilled Salmon Steak',
      price: '199',
      description: 'Salmon, Avocado, Lettuce, Cherry tomato',
      isFavourite: true,
    },
  ],
};

export const userProfileData = {
  heading: 'Profile',
  title: 'My details',
  subtitle: 'We use these to confirm bookings and send receipts.',
  initialProfile: {
    name: 'Aarav Reddy',
    email: 'aarav@example.com',
    phone: '+91 98765 43210',
    newsletter: false,
  },
};
