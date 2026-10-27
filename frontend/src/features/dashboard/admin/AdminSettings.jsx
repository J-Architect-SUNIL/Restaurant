import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const AdminSettings = () => {
  // Opening Hours State
  const [hours, setHours] = useState([
    { day: 'Monday', opens: '11:00', closes: '22:00' },
    { day: 'Tuesday', opens: '11:00', closes: '22:00' },
    { day: 'Wednesday', opens: '11:00', closes: '22:00' },
    { day: 'Thursday', opens: '11:00', closes: '22:00' },
    { day: 'Friday', opens: '11:00', closes: '23:30' },
    { day: 'Saturday', opens: '11:00', closes: '23:30' },
    { day: 'Sunday', opens: '11:00', closes: '22:00' },
  ]);

  // Restaurant Contact Info State
  const [phone, setPhone] = useState('+1 (555) 012-3456');
  const [email, setEmail] = useState('info@yourdomain.com');

  // Handle time change for specific days
  const handleTimeChange = (index, field, value) => {
    const updatedHours = [...hours];
    updatedHours[index][field] = value;
    setHours(updatedHours);
  };

  // Handle Save Settings
  const handleSave = (e) => {
    e.preventDefault();
    alert('Restaurant settings saved successfully!');
  };

  return (
    <div className="space-y-8 pb-10 max-w-4xl">
      {/* Header Section */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] mb-1">
          Settings
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">
          Restaurant settings
        </h2>
        <p className="text-sm text-gray-500">Opening hours shown on the website.</p>
      </div>

      {/* Settings Card Container */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm">
        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Operating Hours Table / List */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/30">
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Opens</th>
                  <th className="py-3 px-4">Closes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {hours.map((item, index) => (
                  <tr key={item.day} className="hover:bg-gray-50/50 transition-colors">
                    
                    {/* Day Name */}
                    <td className="py-3.5 px-4 font-medium text-[#1A1A1A]">
                      {item.day}
                    </td>

                    {/* Opens Input */}
                    <td className="py-3.5 px-4">
                      <div className="relative max-w-40">
                        <input
                          type="text"
                          value={item.opens}
                          onChange={(e) => handleTimeChange(index, 'opens', e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A] pr-9"
                        />
                        <Clock className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>

                    {/* Closes Input */}
                    <td className="py-3.5 px-4">
                      <div className="relative max-w-40">
                        <input
                          type="text"
                          value={item.closes}
                          onChange={(e) => handleTimeChange(index, 'closes', e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A] pr-9"
                        />
                        <Clock className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contact Details Section */}
          <div className="pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Phone Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
              />
            </div>

          </div>

          {/* Save Settings Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#c29f2f] text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              Save settings
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminSettings;