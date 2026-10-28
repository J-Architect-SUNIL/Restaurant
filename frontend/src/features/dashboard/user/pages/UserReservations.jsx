import { useState } from 'react';
import ReservationRow from '../components/ReservationRow';
import DashboardPageHeader from '../../shared/components/DashboardPageHeader';

const userReservationsData = {
  heading: 'Reservations',
  title: 'My reservations',
  subtitle: 'Open every day, 11:00 AM–10:00 PM (Fri–Sat until 11:30 PM).',
  form: {
    dateLabel: 'Date',
    timeLabel: 'Time',
    guestsLabel: 'Guests',
    guestPlaceholder: 'Select number of guests',
    guestNote: 'For parties of more than 10, please contact us.',
    specialRequestLabel: 'Special request',
    specialRequestPlaceholder: 'Birthday, window table, allergies',
    submitLabel: 'Make a reservation',
  },
  allReservationsHeading: 'All reservations',
  reservations: [
    {
      id: 'res-1',
      dateTime: 'Sun, 8 Nov, 2026, 13:00',
      guests: '2',
      status: 'Pending',
    },
    {
      id: 'res-2',
      dateTime: 'Sat, 24 Oct, 2026, 19:30',
      guests: '4',
      status: 'Confirmed',
    },
  ],
};

const UserReservations = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    specialRequest: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.h("New Reservation Submitted:", formData);
    // Add your reservation submission logic here
  };

  return (
    <div className="max-w-5xl space-y-8">
      <DashboardPageHeader
        title={userReservationsData.heading}
        subtitle={userReservationsData.title}
        description={userReservationsData.subtitle}
      />

      {/* Reservation Form Card */}
      <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Date Picker */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#1A1A1A]">
              {userReservationsData.form.dateLabel}
            </label>
            <input 
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Time Picker */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#1A1A1A]">
              {userReservationsData.form.timeLabel}
            </label>
            <input 
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Guests Select */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#1A1A1A]">
              {userReservationsData.form.guestsLabel}
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="" disabled>{userReservationsData.form.guestPlaceholder}</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'guest' : 'guests'}</option>
              ))}
            </select>
            <p className="text-[11px] text-stone-400 mt-1">{userReservationsData.form.guestNote}</p>
          </div>
        </div>

        {/* Special Request */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#1A1A1A]">
            {userReservationsData.form.specialRequestLabel}
          </label>
          <textarea
            rows="3"
            placeholder={userReservationsData.form.specialRequestPlaceholder}
            value={formData.specialRequest}
            onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
            className="w-full p-3 bg-white border border-stone-300 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-[#D4AF37] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
        >
          {userReservationsData.form.submitLabel}
        </button>
      </form>

      {/* All Reservations List */}
      <section className="space-y-4">
        <h4 className="font-semibold text-lg text-[#1A1A1A]">{userReservationsData.allReservationsHeading}</h4>
        <div className="space-y-3">
          {userReservationsData.reservations.map((reservation) => (
            <ReservationRow 
              key={reservation.id} 
              {...reservation} 
              onCancel={() => console.log('Cancel reservation:', reservation.id)} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserReservations;