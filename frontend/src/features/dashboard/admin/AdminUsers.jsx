import React, { useState } from 'react';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Initial registered guests list matching the screenshot
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Aarav Reddy',
      email: 'aarav@example.com',
      joined: '2 Mar 2026',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jason M.',
      email: 'jason@example.com',
      joined: '18 Apr 2026',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Ryan H.',
      email: 'ryan@example.com',
      joined: '9 May 2026',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Spam Bot',
      email: 'bot@spam.test',
      joined: '30 Sept 2026',
      status: 'Blocked',
    },
  ]);

  // Toggle Block / Unblock User Status
  const toggleBlockUser = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            status: user.status === 'Active' ? 'Blocked' : 'Active',
          };
        }
        return user;
      })
    );
  };

  // Filter users based on search input (name or email)
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] mb-1">
          Guests
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">
          Users
        </h2>
        <p className="text-sm text-gray-500">Registered guests of the website.</p>
      </div>

      {/* Controls Bar: Search Input */}
      <div className="max-w-xs">
        <input
          type="text"
          placeholder="Search name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A] placeholder-gray-400 shadow-sm"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden max-w-5xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/30">
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Joined</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    {/* User Name & Email */}
                    <td className="py-4 px-6">
                      <div className="font-semibold text-[#1A1A1A]">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-400 font-normal">
                        {user.email}
                      </div>
                    </td>

                    {/* Joined Date */}
                    <td className="py-4 px-6 text-gray-600 font-normal">
                      {user.joined}
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-6">
                      {user.status === 'Active' ? (
                        <span className="px-3 py-1 text-xs font-medium rounded-full border border-emerald-400 text-emerald-600 bg-emerald-50/30">
                          Active
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-medium rounded-full border border-red-300 text-red-600 bg-red-50/30">
                          Blocked
                        </span>
                      )}
                    </td>

                    {/* Action Button */}
                    <td className="py-4 px-6">
                      {user.status === 'Active' ? (
                        <button
                          onClick={() => toggleBlockUser(user.id)}
                          className="px-4 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded-lg transition-colors"
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleBlockUser(user.id)}
                          className="px-4 py-1.5 border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-medium rounded-lg transition-colors"
                        >
                          Unblock
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-8 text-center text-gray-400 text-sm"
                  >
                    No guests found matching your search.
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

export default AdminUsers;