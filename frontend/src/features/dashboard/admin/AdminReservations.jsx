import React, { useState } from 'react';

const AdminReservations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Initial reservation data matching the screenshot
  const [reservations, setReservations] = useState([
    { id: 1, name: 'Aarav Reddy', phone: '+91 98765 43210', date: '24 Oct 2026', time: '20:30', guests: 10, status: 'Pending' },
    { id: 2, name: 'Mark S.', phone: '+91 90000 33333', date: '24 Oct 2026', time: '20:30', guests: 10, status: 'Pending' },
    { id: 3, name: 'Jason M.', phone: '+91 90000 22222', date: '24 Oct 2026', time: '19:30', guests: 2, status: 'Confirmed' },
    { id: 4, name: 'Ryan H.', phone: '+91 90000 11111', date: '24 Oct 2026', time: '13:00', guests: 4, status: 'Pending' },
    { id: 5, name: 'Priya N.', phone: '+91 90000 44444', date: '20 Oct 2026', time: '21:00', guests: 3, status: 'Completed' },
    { id: 6, name: 'Dev K.', phone: '+91 90000 55555', date: '19 Oct 2026', time: '20:00', guests: 5, status: 'Cancelled' },
  ]);

  // Handle status update actions
  const updateStatus = (id, newStatus) => {
    setReservations(prev =>
      prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  // Filter logic for search and status
  const filteredReservations = reservations.filter(res => {
    const matchesSearch = 
      res.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      res.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'All' || res.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Helper for status badge style
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <span className="px-3 py-1 text-xs font-medium rounded-full border border-amber-300 text-amber-600 bg-amber-50/50">Pending</span>;
      case 'confirmed':
        return <span className="px-3 py-1 text-xs font-medium rounded-full border border-emerald-300 text-emerald-600 bg-emerald-50/50">Confirmed</span>;
      case 'completed':
        return <span className="px-3 py-1 text-xs font-medium rounded-full border border-emerald-300 text-emerald-600 bg-emerald-50/50">Completed</span>;
      case 'cancelled':
        return <span className="px-3 py-1 text-xs font-medium rounded-full border border-red-300 text-red-600 bg-red-50/50">Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header Section */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] mb-1">Bookings</h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">Reservations</h2>
        <p className="text-sm text-gray-500">Confirm, decline or complete bookings.</p>
      </div>

      {/* Controls Bar: Search & Status Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        
        {/* Search Input */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search by name or phone"
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
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

      </div>

      {/* Reservations Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3 px-6">Guest</th>
                <th className="py-3 px-6">Date & Time</th>
                <th className="py-3 px-6">Guests</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredReservations.length > 0 ? (
                filteredReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-gray-50/50 transition-colors">
                    
                    {/* Guest Column */}
                    <td className="py-4 px-6">
                      <div className="font-semibold text-[#1A1A1A]">{res.name}</div>
                      <div className="text-xs text-gray-400">{res.phone}</div>
                    </td>

                    {/* Date & Time Column */}
                    <td className="py-4 px-6">
                      <div className="text-gray-800">{res.date}</div>
                      <div className="text-xs text-gray-400">{res.time}</div>
                    </td>

                    {/* Guests Count Column */}
                    <td className="py-4 px-6 font-medium text-gray-700">
                      {res.guests}
                    </td>

                    {/* Status Column */}
                    <td className="py-4 px-6">
                      {getStatusBadge(res.status)}
                    </td>

                    {/* Actions Column */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {res.status === 'Pending' && (
                          <>
                            <button 
                              onClick={() => updateStatus(res.id, 'Confirmed')}
                              className="px-3 py-1 bg-[#D4AF37] hover:bg-[#c29f2f] text-white text-xs font-medium rounded transition-colors shadow-sm"
                            >
                              Confirm
                            </button>
                            <button 
                              onClick={() => updateStatus(res.id, 'Cancelled')}
                              className="px-3 py-1 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded transition-colors"
                            >
                              Cancel
                            </button>
                          </>
                        )}

                        {res.status === 'Confirmed' && (
                          <>
                            <button 
                              onClick={() => updateStatus(res.id, 'Completed')}
                              className="px-3 py-1 bg-[#D4AF37] hover:bg-[#c29f2f] text-white text-xs font-medium rounded transition-colors shadow-sm"
                            >
                              Complete
                            </button>
                            <button 
                              onClick={() => updateStatus(res.id, 'Cancelled')}
                              className="px-3 py-1 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded transition-colors"
                            >
                              Cancel
                            </button>
                          </>
                        )}

                        {(res.status === 'Completed' || res.status === 'Cancelled') && (
                          <span className="text-xs text-gray-400 italic">No actions available</span>
                        )}
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-400 text-sm">
                    No reservations found matching your filter.
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

export default AdminReservations;