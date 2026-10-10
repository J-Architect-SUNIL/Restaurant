import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing menu and close icons

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="relative w-full min-h-screen text-black overflow-x-hidden">
      <section className="w-full flex flex-col sm:flex-row justify-center items-center text-center py-2 px-4 text-xs sm:text-sm lg:gap-50 sm:gap-8 z-30 absolute top-0 left-0 right-0 text-white bg-black/40 border-b border-white/10 transition-colors">
        <p>+1 (555) 012-3456</p>
        <p>info@yourdomain.com</p>
        <p>Open hours: Monday - Sunday 11:00 AM - 10:00 PM</p>
      </section>

      <section className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center px-4 sm:px-8 py-3 lg:py-4 z-30 absolute top-15 sm:top-12 lg:top-10 left-0 right-0 text-white bg-black/40 lg:bg-transparent">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide">
          Feliciano
        </p>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-yellow-500 focus:outline-none p-1 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-auto items-center gap-4 lg:gap-8 text-sm sm:text-base lg:text-lg mt-4 lg:mt-0 py-4 lg:py-0 bg-black/80 lg:bg-transparent rounded-lg lg:rounded-none transition-all duration-300`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-medium"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-medium"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-medium"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/stories"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-medium"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Stories
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-medium"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/bookAtable"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-medium"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Book a Table
          </NavLink>
        </nav>
      </section>

      <Outlet />
    </main>
  );
};

export default App;