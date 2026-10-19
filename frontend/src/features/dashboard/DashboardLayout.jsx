import { Outlet, NavLink } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    /* 1. Lock root container height and disable body scrolling */
    <div className="flex h-screen overflow-hidden bg-[#FDFBF7] text-[#1A1A1A]">
      
      {/* 2. Fixed sidebar with internal scroll fallback if needed */}
      <aside className="w-64 h-full bg-[#111111] text-[#E5E5E5] flex flex-col justify-between p-6 shrink-0 overflow-y-auto">
        <div>
          <h1 className="text-2xl font-serif text-white mb-10">Feliciano</h1>
          <nav className="space-y-2">
            {[
              { name: 'Overview', path: '' },
              { name: 'My reservations', path: 'reservations' },
              { name: 'My orders', path: 'orders' },
              { name: 'Favourites', path: 'favourites' },
              { name: 'Profile', path: 'profile' },
            ].map((item) => (
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
            Signed in as <span className="font-semibold text-white">Aarav Reddy</span>
          </div>
          <button className="w-full text-left text-xs text-gray-300 hover:text-white py-1">
            Switch theme
          </button>
          <button className="w-full text-left text-xs text-red-400 hover:text-red-300 py-1">
            Sign out
          </button>
        </footer>
      </aside>

      {/* 3. Main Content Area takes remaining width & handles independent scrolling */}
      <main className="flex-1 h-full p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}