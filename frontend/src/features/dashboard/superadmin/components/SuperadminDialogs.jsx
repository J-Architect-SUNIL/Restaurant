import { Check, CheckCircle2, Mail, X } from 'lucide-react';
import { buttonClass, Dialog, StatusBadge } from './SuperadminShared';

function DialogHeader({ eyebrow, title, description, id, onClose }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9A7620]">{eyebrow}</p>
        <h2 id={id} className="mt-1 text-xl font-semibold text-stone-900">{title}</h2>
        {description && <p className="mt-2 text-sm text-stone-500">{description}</p>}
      </div>
      <button type="button" onClick={onClose} aria-label="Close dialog" className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={20} /></button>
    </div>
  );
}

function FormField({ id, label, value, onChange, type = 'text', required = true, placeholder, rows }) {
  const className = `w-full ${rows ? 'resize-y' : ''} rounded-lg border border-stone-200 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]`;
  const commonProps = {
    id,
    required,
    value,
    onChange,
    placeholder,
    className,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-stone-700">{label}</label>
      {rows
        ? <textarea {...commonProps} rows={rows} />
        : <input {...commonProps} type={type} />}
    </div>
  );
}

export function InviteDialog({ user, role, onRoleChange, onClose, onSubmit }) {
  if (!user) return null;

  return (
    <Dialog labelledBy="invite-title" onClose={onClose}>
      <DialogHeader
        eyebrow="Application invitation"
        title={`Request ${role.toLowerCase()} details`}
        description={`We’ll email a secure details form to ${user.name}.`}
        id="invite-title"
        onClose={onClose}
      />
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="invite-email" className="mb-1.5 block text-sm font-medium text-stone-700">Email address</label>
          <input id="invite-email" type="email" value={user.email} readOnly className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-600" />
        </div>
        <div>
          <label htmlFor="invite-role" className="mb-1.5 block text-sm font-medium text-stone-700">Requested role</label>
          <select id="invite-role" value={role} onChange={(event) => onRoleChange(event.target.value)} className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]">
            <option>Admin</option>
            <option>Employee</option>
          </select>
        </div>
        <div className="rounded-lg bg-stone-50 p-3 text-xs leading-5 text-stone-600">
          The applicant will provide their contact details, address, experience, and emergency contact. Access stays unchanged until you approve their submitted form.
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <button type="button" onClick={onClose} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Cancel</button>
          <button type="submit" className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}><Mail size={16} /> Send form</button>
        </div>
      </form>
    </Dialog>
  );
}

const applicationFieldGroups = [
  [{ key: 'name', id: 'application-name', label: 'Full name', type: 'text' }],
  [
    { key: 'email', id: 'application-email', label: 'Email address', type: 'email' },
    { key: 'phone', id: 'application-phone', label: 'Phone number', type: 'tel' },
  ],
  [{ key: 'address', id: 'application-address', label: 'Current address', rows: 2, placeholder: 'Street, city, and postal code' }],
  [{ key: 'experience', id: 'application-experience', label: 'Relevant experience', rows: 3, placeholder: 'Tell us about your experience' }],
  [{ key: 'emergencyContact', id: 'application-emergency-contact', label: 'Emergency contact number', type: 'tel', placeholder: '+91 00000 00000' }],
];

export function ApplicationFormDialog({ request, details, onDetailsChange, onClose, onSubmit }) {
  if (!request) return null;

  const updateField = (key, value) => onDetailsChange((current) => ({ ...current, [key]: value }));

  return (
    <Dialog labelledBy="application-form-title" onClose={onClose}>
      <DialogHeader
        eyebrow="Feliciano team application"
        title="Complete your details"
        description={`Applicant: ${request.name} · ${request.requestedRole}`}
        id="application-form-title"
        onClose={onClose}
      />
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {applicationFieldGroups.map((group) => (
          <div key={group[0].key} className={group.length > 1 ? 'grid gap-4 sm:grid-cols-2' : ''}>
            {group.map((field) => (
              <FormField
                key={field.key}
                {...field}
                value={details[field.key]}
                onChange={(event) => updateField(field.key, event.target.value)}
              />
            ))}
          </div>
        ))}
        <p className="text-xs leading-5 text-stone-500">Submitting this form sends your application to the superadmin. Your account remains a user until it is approved.</p>
        <div className="flex justify-end gap-2 pt-2">
          <button type="button" onClick={onClose} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Cancel</button>
          <button type="submit" className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}>Submit application</button>
        </div>
      </form>
    </Dialog>
  );
}

export function ReviewDialog({ request, onClose, onReview }) {
  if (!request) return null;

  const details = [
    ['Full name', request.name],
    ['Email', request.email],
    ['Phone', request.phone],
    ['Address', request.details.address],
    ['Relevant experience', request.details.experience],
    ['Emergency contact', request.details.emergencyContact],
  ];

  return (
    <Dialog labelledBy="review-title" onClose={onClose} size="max-w-xl">
      <DialogHeader
        eyebrow={`${request.id} · ${request.requestedRole} application`}
        title="Review applicant"
        id="review-title"
        onClose={onClose}
      />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {details.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs font-medium text-stone-500">{label}</p>
            <p className="mt-1 text-sm font-medium text-stone-800">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
        {request.status === 'Pending review' ? (
          <>
            <button type="button" onClick={() => onReview(request.id, 'Rejected')} className={`${buttonClass} border border-red-200 text-red-700 hover:bg-red-50`}><X size={15} /> Reject application</button>
            <button type="button" onClick={() => onReview(request.id, 'Approved')} className={`${buttonClass} bg-[#D4AF37] text-white hover:bg-[#c29f2f]`}><Check size={16} /> Approve &amp; grant access</button>
          </>
        ) : (
          <div className="flex w-full items-center justify-between">
            <StatusBadge>{request.status}</StatusBadge>
            <button type="button" onClick={onClose} className={`${buttonClass} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Close</button>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export function Notice({ children, onDismiss }) {
  if (!children) return null;

  return (
    <div role="status" className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
      <span className="flex items-center gap-2"><CheckCircle2 size={17} />{children}</span>
      <button type="button" onClick={onDismiss} aria-label="Dismiss notification"><X size={17} /></button>
    </div>
  );
}
