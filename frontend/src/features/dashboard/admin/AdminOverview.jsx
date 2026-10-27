import React from 'react';

const AdminOverview = () => {
  // Mock data for Admin Overview matching the UI
  const stats = [
    { label: 'Order revenue', value: '₹1,248' },
    { label: 'Orders', value: '5' },
    { label: 'Reservations today', value: '3' },
    { label: 'Active guests', value: '3' },
  ];

  const weeklyRevenue = [
    { day: 'Mon', amount: '14.2k', height: '60%' },
    { day: 'Tue', amount: '11.8k', height: '50%' },
    { day: 'Wed', amount: '12.9k', height: '55%' },
    { day: 'Thu', amount: '15.4k', height: '68%' },
    { day: 'Fri', amount: '22.1k', height: '85%' },
    { day: 'Sat', amount: '24.8k', height: '95%' },
    { day: 'Sun', amount: '18.3k', height: '75%' },
  ];

  const pendingAttention = [
    { name: 'Ryan H.', guests: '4 guests', date: '24 Oct 2026, 13:00' },
    { name: 'Mark S.', guests: '10 guests', date: '24 Oct 2026, 20:30' },
    { name: 'Aarav Reddy', guests: '2 guests', date: '8 Nov 2026, 13:00' },
  ];

  const latestOrders = [
    { id: '#1051', guest: 'Aarav Reddy', items: 'Pad Thai with Tofu, Avocado Toast', total: '₹249', status: 'Pending', statusClass: 'bg-amber-100 text-amber-700 border-amber-300' },
    { id: '#1050', guest: 'Jason M.', items: 'Grilled Salmon Steak', total: '₹199', status: 'Preparing', statusClass: 'bg-amber-50 text-amber-600 border-amber-200' },
    { id: '#1049', guest: 'Ryan H.', items: 'Crispy Buttermilk Chicken ×2', total: '₹600', status: 'Ready', statusClass: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  ];

  return (
    <div className="space-y-8 pb-10">
      
      {/* Top Header Section */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] mb-1">Dashboard</h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">Good day, Admin</h2>
        <p className="text-sm text-gray-500">How Feliciano is doing today.</p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-2xl font-semibold text-[#1A1A1A] mb-1">{stat.value}</div>
            <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Middle Section: Revenue Chart & Needs Attention */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue by Day Chart (Spans 2 columns) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-6">This week</h3>
            <h4 className="text-sm font-semibold text-gray-700 mb-6">Revenue by day</h4>
          </div>

          {/* Bar Chart Container */}
          <div className="flex items-end justify-between h-48 pt-6 px-2 border-b border-gray-100 pb-2">
            {weeklyRevenue.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.amount}
                </span>
                <div 
                  className="w-8 sm:w-12 bg-[#D4AF37] rounded-t-md transition-all duration-300 hover:bg-[#c29f2f]"
                  style={{ height: item.height }}
                ></div>
                <span className="text-xs text-gray-600 font-medium mt-1">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Your Attention Panel */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4">Needs your attention</h3>
            
            <div className="space-y-4">
              {pendingAttention.map((item, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-semibold text-[#1A1A1A]">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.guests}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{item.date}</p>
                  
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-[#D4AF37] hover:bg-[#c29f2f] text-white text-xs font-medium rounded transition-colors shadow-sm">
                      Confirm
                    </button>
                    <button className="px-3 py-1 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Latest Orders Table Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">Latest orders</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3 px-6">Order</th>
                <th className="py-3 px-6">Guest</th>
                <th className="py-3 px-6">Items</th>
                <th className="py-3 px-6">Total</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {latestOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50/55 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#1A1A1A]">{order.id}</td>
                  <td className="py-4 px-6 text-gray-700">{order.guest}</td>
                  <td className="py-4 px-6 text-gray-600">{order.items}</td>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">{order.total}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminOverview;