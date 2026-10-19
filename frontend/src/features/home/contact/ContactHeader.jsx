import { NavLink } from "react-router-dom";
import { bg1 } from "../../../assets/cloudinaryImages.js";
const ContactHeader = () => {
  return (
    <header className="relative w-full h-64 sm:h-80 lg:h-96 bg-black flex flex-col justify-end items-center pb-12 overflow-hidden">
      <img
        src={bg1}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl text-white font-bold font-serif">
          Contact
        </h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2 text-yellow-500 text-sm sm:text-base font-medium">
            <li>
              <NavLink to="/" className="hover:text-white transition-colors">
                HOME
              </NavLink>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page">CONTACT</li>
          </ol>
        </nav>
      </div>
    </header>
  );
};
export default ContactHeader;