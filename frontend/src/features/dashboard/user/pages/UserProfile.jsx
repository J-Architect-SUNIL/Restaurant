import React, { useState } from 'react';

const userProfileData = {
  heading: 'Profile',
  title: 'My details',
  subtitle: 'We use these to confirm bookings and send receipts.',
  initialProfile: {
    name: 'Aarav Reddy',
    email: 'aarav@example.com',
    phone: '+91 98765 43210',
    newsletter: false,
  },
};

const UserProfile = ({
  user = userProfileData.initialProfile,
  isLoading = false,
  onSaveProfile,
}) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    newsletter: user.newsletter || false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSaveSuccess(false);

    try {
      if (onSaveProfile) {
        await onSaveProfile(formData);
      }
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl space-y-6">
      {/* Page Header */}
      <header className="mb-8">
        <h2 className="font-serif text-3xl text-[#D4AF37] mb-1">
          {userProfileData.heading}
        </h2>
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
          {userProfileData.title}
        </h3>
        <p className="text-sm text-stone-500">
          {userProfileData.subtitle}
        </p>
      </header>

      {/* Details Card Form */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-6 sm:p-8">
        {isLoading ? (
          <div className="text-sm text-stone-400 py-4">Loading user profile...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="name" 
                  className="block text-xs font-semibold text-[#1A1A1A]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-xs font-semibold text-[#1A1A1A]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="phone" 
                  className="block text-xs font-semibold text-[#1A1A1A]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-4 h-4 rounded border-stone-300 text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
              />
              <label 
                htmlFor="newsletter" 
                className="text-xs text-stone-600 cursor-pointer select-none"
              >
                Send me the monthly newsletter about new dishes and wine evenings
              </label>
            </div>

            {/* Submit Button & Feedback */}
            <div className="pt-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-xs font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? 'Saving...' : 'Save changes'}
              </button>

              {saveSuccess && (
                <span className="text-xs text-emerald-600 font-medium">
                  Changes saved successfully!
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;