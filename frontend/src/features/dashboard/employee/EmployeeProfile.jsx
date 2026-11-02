import DashboardPageHeader from './components/DashboardPageHeader';
import { employeeProfile } from './employeeData';

const EmployeeProfile = () => {
  return (
    <div className="space-y-8 pb-10">
      <DashboardPageHeader
        title="Profile"
        subtitle="My details"
        description="Your role is set by the admin."
      />

      <div className="rounded-2xl border border-stone-200 bg-[#F8F5F0] p-5 shadow-sm">
        <div className="grid gap-5 md:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-stone-600">Name</label>
            <input value={employeeProfile.name} readOnly className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base text-[#1A1A1A] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Role</label>
            <input value={employeeProfile.role} readOnly className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base text-[#1A1A1A] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Email</label>
            <input value={employeeProfile.email} readOnly className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base text-[#1A1A1A] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Phone</label>
            <input value={employeeProfile.phone} readOnly className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base text-[#1A1A1A] outline-none" />
          </div>
        </div>
        <button type="button" className="mt-5 rounded-xl bg-[#D4AF37] px-6 py-3 text-lg font-semibold text-[#1A1A1A] hover:bg-[#c89b2d]">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
