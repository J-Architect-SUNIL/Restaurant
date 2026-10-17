import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "about", label: "About" },
  { path: "menu", label: "Menu" },
  { path: "stories", label: "Stories" },
  { path: "contact", label: "Contact" },
  { path: "bookAtable", label: "Book a Table" },
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
      [
        "transition-colors",
        "hover:text-yellow-500",
        "focus-visible:outline",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        isActive ? "text-yellow-500 font-medium" : "",
      ]
        .filter(Boolean)
        .join(" "),
    []
  );

  return (
    <section className="absolute top-15 sm:top-12 lg:top-10 left-0 right-0 z-30 flex flex-wrap lg:flex-nowrap justify-between items-center px-4 sm:px-8 py-3 lg:py-4 text-white bg-black/40 lg:bg-transparent">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide">
        Feliciano
      </p>
      
      <button
        type="button"
        onClick={toggleMenu}
        className="lg:hidden p-1 text-white transition-colors hover:text-yellow-500 focus-visible:outline focus-visible:outline-offset-2 cursor-pointer"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        {isMenuOpen ? (
          <X className="h-7 w-7" aria-hidden="true" />
        ) : (
          <Menu className="h-7 w-7" aria-hidden="true" />
        )}
      </button>

      <nav
        id="primary-navigation"
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