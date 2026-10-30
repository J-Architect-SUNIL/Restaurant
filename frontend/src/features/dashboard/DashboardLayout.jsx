import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export let role = 'user';

const dashboardConfigs = {
  user: {
    brand: 'Feliciano',
    subBrand: null,
    navigationItems: [
      { name: 'Overview', path: 'user/overview' },
      { name: 'My reservations', path: 'user/reservations' },
      { name: 'My orders', path: 'user/orders' },
      { name: 'Favourites', path: 'user/favourites' },
      { name: 'Profile', path: 'user/profile' },
    ],
    userName: 'Aarav Reddy',
  },
  admin: {
    brand: 'Feliciano',
    subBrand: 'ADMIN',
    navigationItems: [
      { name: 'Overview', path: 'admin/overview' },
      { name: 'Reservations', path: 'admin/reservations' },
      { name: 'Orders', path: 'admin/orders' },
      { name: 'Menu', path: 'admin/menu' },
      { name: 'Users', path: 'admin/users' },
      { name: 'Team overview', path: 'admin/employees' },
      { name: 'Employee applications', path: 'admin/employees/applications' },
      { name: 'Team access', path: 'admin/employees/team' },
      { name: 'Settings', path: 'admin/settings' },
    ],
    userName: 'Sunil',
  },
  employee: {
    brand: 'Feliciano',
    subBrand: 'STAFF',
    navigationItems: [
      { name: 'Overview', path: 'employee/overview' },
      { name: 'Reservations', path: 'employee/reservations' },
      { name: 'Kitchen queue', path: 'employee/kitchen-queue' },
      { name: 'Tables', path: 'employee/tables' },
      { name: 'My schedule', path: 'employee/schedule' },
      { name: 'Profile', path: 'employee/profile' },
    ],
    userName: 'Rebecca Wilson',
  },
  superadmin: {
    brand: 'Feliciano',
    subBrand: 'SUPERADMIN',
    navigationItems: [
      { name: 'Overview', path: 'superadmin' },
      { name: 'Users & access', path: 'superadmin/users' },
      { name: 'Applications', path: 'superadmin/applications' },
      { name: 'Team access', path: 'superadmin/team' },
    ],
    userName: 'Super Admin',
  },
};

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSuperadminRoute = location.pathname.startsWith('/dashboard/superadmin');
  const isAdminRoute = location.pathname.startsWith('/dashboard/admin');
  const isEmployeeRoute = location.pathname.startsWith('/dashboard/employee');
  const currentRole = isSuperadminRoute ? 'superadmin' : isAdminRoute ? 'admin' : isEmployeeRoute ? 'employee' : role;
  const currentData = dashboardConfigs[currentRole] || dashboardConfigs.user;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderNavigation = (mobile = false) => (
    <nav className="space-y-2">
      {currentData.navigationItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={['superadmin', 'admin'].includes(currentRole) && ['superadmin', 'admin/employees'].includes(item.path)}
          onClick={mobile ? closeMobileMenu : undefined}
          className={({ isActive }) =>
            `block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-[#D4AF37]/15 text-[#D4AF37]'
                : 'text-gray-300 hover:bg-white/5'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );

  const renderFooter = (mobile = false) => (
    <footer className="mt-6 space-y-3 border-t border-gray-800 pt-4">
      <div className="text-xs text-gray-400">
        Signed in as <span className="font-semibold text-white">{currentData.userName}</span>
      </div>
      <button
        type="button"
        onClick={mobile ? closeMobileMenu : undefined}
        className="w-full py-1 text-left text-xs text-gray-300 hover:text-white"
      >
        Switch theme
      </button>
      <button
        type="button"
        onClick={mobile ? closeMobileMenu : undefined}
        className="w-full py-1 text-left text-xs text-red-400 hover:text-red-300"
      >
        Sign out
      </button>
    </footer>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[#FDFBF7] text-[#1A1A1A]">
      <aside className="hidden h-full w-64 shrink-0 flex-col justify-between overflow-y-auto bg-[#111111] p-6 text-[#E5E5E5] lg:flex">
        <div>
          <div className="mb-10">
            <h1 className="font-serif text-2xl text-white">{currentData.brand}</h1>
            {currentData.subBrand && (
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                {currentData.subBrand}
              </span>
            )}
          </div>
          {renderNavigation()}
        </div>
        {renderFooter()}
      </aside>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 bg-black/60"
            onClick={closeMobileMenu}
          />
          <aside className="relative z-10 flex h-full w-72 max-w-[calc(100vw-1rem)] flex-col justify-between overflow-y-auto bg-[#111111] p-6 text-[#E5E5E5] shadow-2xl">
            <div>
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h1 className="font-serif text-2xl text-white">{currentData.brand}</h1>
                  {currentData.subBrand && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                      {currentData.subBrand}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="p-1 text-lg text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              {renderNavigation(true)}
            </div>
            {renderFooter(true)}
          </aside>
        </div>
      )}

      <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
        <header className="flex shrink-0 items-center justify-between bg-[#111111] px-6 py-4 text-white shadow-md lg:hidden">
          <div>
            <h1 className="font-serif text-xl">{currentData.brand}</h1>
            {currentData.subBrand && (
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                {currentData.subBrand}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20 focus:outline-none"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
