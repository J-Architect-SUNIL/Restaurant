import OrderRow from '../components/OrderRow';
import DashboardPageHeader from '../../employee/components/DashboardPageHeader';
import { userOrdersData } from '../userData';

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