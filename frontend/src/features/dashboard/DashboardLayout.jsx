import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export let role = "admin"; // Change to "user" or "admin" as needed

const dashboardConfigs = {
  user: {
    brand: 'Feliciano',
    subBrand: null,
    navigationItems: [
      { name: 'Overview', path: 'uoverview' },
      { name: 'My reservations', path: 'userreservations' },
      { name: 'My orders', path: 'userorders' },
      { name: 'Favourites', path: 'userfavourites' },
      { name: 'Profile', path: 'userprofile' },
    ],
    userName: 'Aarav Reddy',
    signedInLabel: 'Signed in as',
    switchThemeLabel: 'Switch theme',
    signOutLabel: 'Sign out',
  },
  admin: {
    brand: 'Feliciano',
    subBrand: 'ADMIN',
    navigationItems: [
      { name: 'Overview', path: 'aoverview' },
      { name: 'Reservations', path: 'adminreservations' },
      { name: 'Orders', path: 'adminorders' },
      { name: 'Menu', path: 'adminmenu' },
      { name: 'Users', path: 'users' },
      { name: 'Employees', path: 'employees' },
      { name: 'Settings', path: 'settings' },
    ],
    userName: 'Admin',
    signedInLabel: 'Signed in as',
    switchThemeLabel: 'Switch theme',
    signOutLabel: 'Sign out',
  },
const dashboardLayoutData = {
  brand: 'Feliciano',
  navigationItems: [
    { name: 'Overview', path: '' },
    { name: 'My reservations', path: 'userreservations' },
    { name: 'My orders', path: 'userorders' },
    { name: 'Favourites', path: 'userfavourites' },
    { name: 'Profile', path: 'userprofile' },
  ],
  userName: 'Aarav Reddy',
  signedInLabel: 'Signed in as',
  switchThemeLabel: 'Switch theme',
  signOutLabel: 'Sign out',
};

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentData = dashboardConfigs[role] || dashboardConfigs.user;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);


  return (
    <div className="flex h-screen overflow-hidden bg-[#FDFBF7] text-[#1A1A1A]">
      
      {/* 1. Desktop Sidebar (Hidden on mobile) */}
      <aside className="hidden lg:flex w-64 h-full bg-[#111111] text-[#E5E5E5] flex-col justify-between p-6 shrink-0 overflow-y-auto">
        <div>
          <div className="mb-10">
            <h1 className="text-2xl font-serif text-white">{currentData.brand}</h1>
            {currentData.subBrand && (
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                {currentData.subBrand}
              </span>
            )}
          </div>
          <nav className="space-y-2">
            {currentData.navigationItems.map((item) => (
          <h1 className="text-2xl font-serif text-white mb-10">{dashboardLayoutData.brand}</h1>
          <nav className="space-y-2">
            {dashboardLayoutData.navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === ''}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37]'
                      : 'hover:bg-white/5 text-gray-300'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <footer className="border-t border-gray-800 pt-4 space-y-3 mt-6">
          <div className="text-xs text-gray-400">
            {dashboardLayoutData.signedInLabel}{' '}
            <span className="font-semibold text-white">{dashboardLayoutData.userName}</span>
          </div>
          <button className="w-full text-left text-xs text-gray-300 hover:text-white py-1">
            {dashboardLayoutData.switchThemeLabel}
          </button>
          <button className="w-full text-left text-xs text-red-400 hover:text-red-300 py-1">
            {currentData.signedInLabel}{' '}
            <span className="font-semibold text-white">{currentData.userName}</span>
          </div>
          <button className="w-full text-left text-xs text-gray-300 hover:text-white py-1">
            {currentData.switchThemeLabel}
          </button>
          <button className="w-full text-left text-xs text-red-400 hover:text-red-300 py-1">
            {currentData.signOutLabel}
            {dashboardLayoutData.signOutLabel}
          </button>
        </footer>
      </aside>

      {/* 2. Mobile Drawer Sidebar & Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Drawer content */}
          <aside className="relative w-72 h-full bg-[#111111] text-[#E5E5E5] flex flex-col justify-between p-6 z-10 overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-serif text-white">{dashboardLayoutData.brand}</h1>
                <button 
                  onClick={closeMobileMenu}
                  className="text-gray-400 hover:text-white text-lg p-1"
                >
                  ✕
                </button>
              </div>

              <nav className="space-y-2">
                {dashboardLayoutData.navigationItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === ''}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#D4AF37]/15 text-[#D4AF37]'
                          : 'hover:bg-white/5 text-gray-300'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Sidebar Footer */}
            <footer className="border-t border-gray-800 pt-4 space-y-3 mt-6">
              <div className="text-xs text-gray-400">
                {dashboardLayoutData.signedInLabel}{' '}
                <span className="font-semibold text-white">{dashboardLayoutData.userName}</span>
              </div>
              <button onClick={closeMobileMenu} className="w-full text-left text-xs text-gray-300 hover:text-white py-1">
                {dashboardLayoutData.switchThemeLabel}
              </button>
              <button onClick={closeMobileMenu} className="w-full text-left text-xs text-red-400 hover:text-red-300 py-1">
                {dashboardLayoutData.signOutLabel}
              </button>
            </footer>
          </aside>
        </div>
      )}

      {/* 3. Main Wrapper */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Mobile Top Header Bar with Hamburger Button */}
        <header className="lg:hidden flex items-center justify-between bg-[#111111] text-white px-6 py-4 shrink-0 shadow-md">
          <h1 className="text-xl font-serif">{dashboardLayoutData.brand}</h1>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 h-full p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;