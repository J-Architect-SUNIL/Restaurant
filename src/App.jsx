import { NavLink, Outlet } from "react-router-dom";

const App = () => {
  let[style, setStyle] = useState()
  return (
    <main className="overflow-hidden w-full h-screen flex flex-col items-center text-black">
      <section className="h-[5vh] flex justify-center items-center gap-80 z-2">
        <p>+1 (555) 012-3456</p>
        <p>info@yourdomain.com</p>
        <p>Open hours: Monday - Sunday 11:00 AM - 10:00 PM</p>
      </section>
      <section className="w-full flex justify-center items-center">
        <p className="text-4xl">Feliciano</p>
        <nav className="w-[65%] h-[10vh]  flex justify-end items-center gap-10 text-xl z-2">
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
