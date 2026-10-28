import NextTableCard from '../components/NextTableCard';
import StatCard from '../../shared/components/StatCard';
import OrderRow from '../components/OrderRow';
import DishCard from '../components/DishCard';
import DashboardPageHeader from '../../shared/components/DashboardPageHeader';

const userOverviewData = {
  welcomeHeading: 'Welcome back',
  greeting: 'Hello, Aarav',
  description: 'Your reservations, orders and favourite dishes in one place.',
  summaryLabel: 'Account summary',
  stats: [
    { label: 'Reservations', value: '3' },
    { label: 'Orders', value: '3' },
    { label: 'Favourite dishes', value: '3' },
    { label: 'Loyalty points', value: '420' },
  ],
  recentOrdersHeading: 'Recent orders',
  orders: [
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
  ],
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

const UserOverview = () => {
  return (
    <div className="max-w-5xl space-y-8 pb-10">
      <DashboardPageHeader
        title={userOverviewData.welcomeHeading}
        subtitle={userOverviewData.greeting}
        description={userOverviewData.description}
      />

      {/* Next Table Banner */}
      <NextTableCard />

      {/* Stat Cards (Responsive: 1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
      <section aria-label={userOverviewData.summaryLabel} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {userOverviewData.stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </section>

      {/* Recent Orders Section */}
      <section className="space-y-4">
        <h4 className="font-semibold text-lg text-[#1A1A1A]">{userOverviewData.recentOrdersHeading}</h4>
        <div className="space-y-3">
          {userOverviewData.orders.map((order) => (
            <OrderRow key={order.id} {...order} />
          ))}
        </div>
      </section>

      {/* Your Favourites Section (Responsive: 1 col on mobile, 3 cols on desktop) */}
      <section className="space-y-4">
        <h4 className="font-semibold text-lg text-[#1A1A1A]">{userOverviewData.favouritesHeading}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userOverviewData.favourites.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserOverview;