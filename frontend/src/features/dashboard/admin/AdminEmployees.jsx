import { useState } from 'react';
import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const AdminEmployees = () => {
  // Form State for adding a new employee
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Chef');

  // Initial staff list matching the screenshot
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Rebeca Welson',
      email: 'rebeca@feliciano.com',
      role: 'Head Chef',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Kharl Branyt',
      email: 'kharl@feliciano.com',
      role: 'Chef',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Luke Simon',
      email: 'luke@feliciano.com',
      role: 'Chef',
      status: 'Active',
    },
  ]);

  // Handle Add Employee
  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newEmployee = {
      id: Date.now(),
      name: name,
      email: email,
      role: role,
      status: 'Active',
    };

    setEmployees([...employees, newEmployee]);
    setName('');
    setEmail('');
    setRole('Chef');
  };

  // Toggle Activate / Deactivate Employee Status
  const toggleEmployeeStatus = (id) => {
    setEmployees((prev) =>
      prev.map((emp) => {
        if (emp.id === id) {
          return {
            ...emp,
            status: emp.status === 'Active' ? 'Inactive' : 'Active',
          };
        }
        return emp;
      })
    );
  };

  // Handle Remove Employee
  const handleRemoveEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <div className="space-y-8 pb-10">
      <DashboardPageHeader
        title="Team"
        subtitle="Employees"
        description="Add or deactivate staff accounts."
      />

      {/* Add Employee Form Card */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm max-w-4xl">
        <form onSubmit={handleAddEmployee} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
              />
            </div>

            {/* Role Select Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A] cursor-pointer"
              >
                <option value="Head Chef">Head Chef</option>
                <option value="Chef">Chef</option>
                <option value="Waiter">Waiter</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#c29f2f] text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              Add employee
            </button>
          </div>
        </form>
      </div>

      {/* Employees Table Section */}
      <div className="space-y-4 max-w-4xl">
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Team</h3>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-155 text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/30">
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Role</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {employees.length > 0 ? (
                  employees.map((emp) => (
                    <tr
                      key={emp.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      {/* Name & Email */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-[#1A1A1A]">
                          {emp.name}
                        </div>
                        <div className="text-xs text-gray-400 font-normal">
                          {emp.email}
                        </div>
                      </td>

                      {/* Role */}
                      <td className="py-4 px-6 text-gray-700 font-medium">
                        {emp.role}
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-6">
                        {emp.status === 'Active' ? (
                          <span className="px-3 py-1 text-xs font-medium rounded-full border border-emerald-400 text-emerald-600 bg-emerald-50/30">
                            Active
                          </span>
                        ) : (
                          <span className="px-3 py-1 text-xs font-medium rounded-full border border-gray-300 text-gray-500 bg-gray-50">
                            Inactive
                          </span>
                        )}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleEmployeeStatus(emp.id)}
                            className="px-3 py-1.5 border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-medium rounded-lg transition-colors"
                          >
                            {emp.status === 'Active' ? 'Deactivate' : 'Activate'}
                          </button>
                          <button
                            onClick={() => handleRemoveEmployee(emp.id)}
                            className="px-3 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded-lg transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="py-8 text-center text-gray-400 text-sm"
                    >
                      No team members added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployees;