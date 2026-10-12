import { NavLink } from "react-router-dom";
import bg1 from "../../assets/Img/bg_1.jpg";
const AboutHeader = () => {
  return (
    <section className="relative w-full h-64 sm:h-80 lg:h-96 bg-black flex flex-col justify-end items-center pb-12 overflow-hidden">
      <img
        src={bg1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl text-white font-bold font-serif">
          About
        </h1>
        <p className="text-yellow-500 text-sm sm:text-base mt-2 font-medium">
          <NavLink to="/">HOME</NavLink> &gt; ABOUT
        </p>
      </div>
    </section>
  );
};
export default AboutHeader;
