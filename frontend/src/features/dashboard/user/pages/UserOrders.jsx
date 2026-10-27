import OrderRow from '../components/OrderRow';
import DashboardPageHeader from '../../shared/components/DashboardPageHeader';

const userOrdersData = {
  heading: 'Orders',
  title: 'My orders',
  subtitle: 'Reorder anything you’ve enjoyed before.',
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
    {
      id: '0988',
      price: '500',
      date: 'Wed, 2 Sept, 2026',
      items: 'Crispy Buttermilk Chicken, Banana Oat Porridge',
      status: 'Delivered',
    },
  ],
};

const UserOrders = () => {
  return (
    <div className="max-w-5xl space-y-6">
      <DashboardPageHeader
        title={userOrdersData.heading}
        subtitle={userOrdersData.title}
        description={userOrdersData.subtitle}
      />

      {/* Orders Container Card */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm divide-y divide-stone-100 overflow-hidden">
        {userOrdersData.orders.map((order) => (
          <div key={order.id} className="p-4 hover:bg-stone-50/50 transition-colors">
            <OrderRow {...order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;