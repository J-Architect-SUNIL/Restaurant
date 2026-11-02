import { ChevronRight } from 'lucide-react';
import { StatusBadge } from './SuperadminShared';

function ApplicationsTable({ applications, onOpenForm, onReview }) {
  const openApplication = (application) => {
    if (application.status === 'Form sent') {
      onOpenForm(application);
    } else {
      onReview(application);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-170 text-left">
          <thead className="bg-stone-50 text-[11px] uppercase tracking-wider text-stone-400">
            <tr>
              <th className="px-5 py-3 font-semibold">Applicant</th>
              <th className="px-5 py-3 font-semibold">Requested access</th>
              <th className="px-5 py-3 font-semibold">Submitted</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-sm">
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-stone-50/70">
                <td className="px-5 py-4">
                  <p className="font-semibold text-stone-800">{application.name}</p>
                  <p className="mt-0.5 text-xs text-stone-500">{application.email}</p>
                </td>
                <td className="px-5 py-4 text-stone-700">{application.requestedRole}</td>
                <td className="px-5 py-4 text-stone-500">{application.submitted}</td>
                <td className="px-5 py-4"><StatusBadge>{application.status}</StatusBadge></td>
                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => openApplication(application)}
                    className="inline-flex items-center gap-1 font-semibold text-[#9A7620] hover:text-[#6f5413]"
                  >
                    {application.status === 'Pending review' ? 'Review' : application.status === 'Form sent' ? 'Open emailed form' : 'View details'} <ChevronRight size={15} />
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr><td colSpan="5" className="px-5 py-10 text-center text-sm text-stone-500">No applications to show.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationsTable;
