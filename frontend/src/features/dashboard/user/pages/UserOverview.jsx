import NextTableCard from '../components/NextTableCard';
import StatCard from '../../shared/components/StatCard';
import OrderRow from '../components/OrderRow';
import DishCard from '../components/DishCard';

export default function UserOverview() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* Welcome Header */}
      <header>
        <h2 className="font-serif text-3xl text-[#D4AF37] mb-1">Welcome back</h2>
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Hello, Aarav</h3>
        <p className="text-sm text-stone-500">Your reservations, orders and favourite dishes in one place.</p>
      </header>

      {/* Next Table Banner */}
      <NextTableCard />

      {/* Stat Cards */}
      <section aria-label="Account summary" className="grid grid-cols-4 gap-4">
        <StatCard value="3" label="Reservations" />
        <StatCard value="3" label="Orders" />
        <StatCard value="3" label="Favourite dishes" />
        <StatCard value="420" label="Loyalty points" />
      </section>

      {/* Recent Orders Section */}
      <section className="space-y-4">
        <h4 className="font-semibold text-lg text-[#1A1A1A]">Recent orders</h4>
        <div className="space-y-3">
          <OrderRow id="1042" price="249" date="Sun, 11 Oct, 2026" items="Pad Thai with Tofu, Avocado Toast" status="Delivered" />
          <OrderRow id="1017" price="199" date="Tue, 29 Sept, 2026" items="Grilled Salmon Steak" status="Delivered" />
        </div>
      </section>

      {/* Your Favourites Section */}
      <section className="space-y-4">
        <h4 className="font-semibold text-lg text-[#1A1A1A]">Your favourites</h4>
        <div className="grid grid-cols-3 gap-4">
          <DishCard title="Pad Thai with Tofu" price="150" description="Rice noodles, Tofu, Peanuts, Spring onion" />
          <DishCard title="Avocado Toast" price="99" description="Sourdough, Avocado, Egg, Chili flakes" />
          <DishCard title="Grilled Salmon Steak" price="199" description="Salmon, Avocado, Lettuce, Cherry tomato" />
        </div>
      </section>
    </div>
  );
}