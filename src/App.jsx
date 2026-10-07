import { NavLink, Outlet, useLocation } from "react-router-dom";

const App = () => {
  let location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <main className="relative w-full min-h-screen text-black">

      {/* Top Info */}
      <section
        className={`w-full h-[10vh] flex justify-center items-center gap-80 z-20
        ${isHome ? "absolute top-0 left-0 text-white" : ""}`}
      >
        <p>+1 (555) 012-3456</p>
        <p>info@yourdomain.com</p>
        <p>Open hours: Monday - Sunday 11:00 AM - 10:00 PM</p>
      </section>

      {/* Navbar */}
      <section
        className={`w-full flex justify-center items-center z-20
        ${isHome ? "absolute top-[10vh] left-0 text-white" : ""}`}
      >
        <p className="text-4xl">Feliciano</p>

        <nav className="w-[65%] h-[10vh] flex justify-end items-center gap-10 text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/stories">Stories</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/bookAtable">Book a Table</NavLink>
        </nav>
      </section>

      <Outlet />

    </main>
  );
};

export default App;