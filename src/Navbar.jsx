import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/menu", label: "Menu" },
  { path: "/stories", label: "Stories" },
  { path: "/contact", label: "Contact" },
  { path: "/bookAtable", label: "Book a Table" },
  { path: "/signin", label: "Sign In" },
];

const Navbar = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const getNavLinkClass = useCallback(
    ({ isActive }) =>
      isActive
        ? "text-yellow-500 font-medium"
        : "hover:text-yellow-500 transition-colors",
    []
  );

  return (
    <section className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center px-4 sm:px-8 py-3 lg:py-4 z-30 absolute top-15 sm:top-12 lg:top-10 left-0 right-0 text-white bg-black/40 lg:bg-transparent">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide">
        Feliciano
      </p>
      <button
        onClick={toggleMenu}
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
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={getNavLinkClass}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </section>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;