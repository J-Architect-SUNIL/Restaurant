import React, { useState } from 'react';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Initial order data matching the screenshot
  const [orders, setOrders] = useState([
    { id: '#1051', guest: 'Aarav Reddy', items: 'Pad Thai with Tofu, Avocado Toast', total: '₹249', status: 'Pending' },
    { id: '#1050', guest: 'Jason M.', items: 'Grilled Salmon Steak', total: '₹199', status: 'Preparing' },
    { id: '#1049', guest: 'Ryan H.', items: 'Crispy Buttermilk Chicken ×2', total: '₹600', status: 'Ready' },
    { id: '#1048', guest: 'Priya N.', items: 'Banana Oat Porridge', total: '₹200', status: 'Delivered' },
    { id: '#1047', guest: 'Mark S.', items: 'Grilled Halloumi Salad', total: '₹99', status: 'Cancelled' },
  ]);

  // Handler to update an order's status from the dropdown
  const handleStatusChange = (id, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order => (order.id === id ? { ...order, status: newStatus } : order))
    );
  };

  // Filter orders based on search input (order ID or guest name) and status filter
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header Section */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] mb-1">Kitchen</h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">Orders</h2>
        <p className="text-sm text-gray-500">Move each order through the kitchen.</p>
      </div>

      {/* Controls Bar: Search & Status Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        
        {/* Search Input */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search order or guest"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
          />
        </div>

        {/* Status Dropdown Filter */}
        <div className="w-full sm:w-48">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A] cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Ready">Ready</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
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
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    
                    {/* Order ID */}
                    <td className="py-4 px-6 font-semibold text-[#1A1A1A]">{order.id}</td>

                    {/* Guest Name */}
                    <td className="py-4 px-6 text-gray-800">{order.guest}</td>

                    {/* Items */}
                    <td className="py-4 px-6 text-gray-600">{order.items}</td>

                    {/* Total Price */}
                    <td className="py-4 px-6 font-medium text-[#1A1A1A]">{order.total}</td>

                    {/* Status Dropdown Action */}
                    <td className="py-4 px-6">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-700 cursor-pointer shadow-sm"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Ready">Ready</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-400 text-sm">
                    No orders found matching your search or filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminOrders;