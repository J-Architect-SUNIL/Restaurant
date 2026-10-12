import { useLocation } from "react-router-dom";
import AboutHeader from "./AboutHeader";
import Footer from "../home/Footer";

const About = () => {
  let location = useLocation();
  const isAbout = location.pathname === "/about";
  return (
    <article className="w-full">
      {isAbout ? <AboutHeader /> : <></>}
      <section className="w-full flex flex-col lg:flex-row px-4 sm:px-8 lg:px-20 xl:px-40 py-12 lg:py-20 gap-10 lg:gap-16 items-center overflow-hidden">
        <section className="w-full lg:w-1/2 flex gap-4 sm:gap-6 justify-center items-center">
          <div className="w-1/2 h-87.5 sm:h-112.5 lg:h-125 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/src/assets/Img/Main1Img.png"
              alt="Chef Image 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-1/2 h-87.5 sm:h-112.5 lg:h-125 overflow-hidden rounded-lg shadow-lg mt-12 sm:mt-16">
            <img
              src="/src/assets/Img/Main2Img.png"
              alt="Chef Image 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
        <section className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left gap-4 sm:gap-6">
          <div>
            <p className="text-5xl sm:text-7xl lg:text-8xl text-[#b89552] font-['Great_Vibes'] mb-2">
              About
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Feliciano <br /> Restaurant
            </h2>
          </div>
          <p className="font-sans text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Feliciano is a neighbourhood kitchen where the menu follows the
            market: fresh pasta made every morning, fish from the day boats and
            vegetables from two small farms outside the city. Come for a quick
            lunch or stay for a long dinner.
          </p>
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            Mon - Sun{" "}
            <span className="font-bold text-gray-900">11 AM - 10 PM</span>
          </p>
          <p className="text-yellow-600 font-bold text-2xl sm:text-4xl lg:text-5xl tracking-wide">
            +1 (555) 012-3456
          </p>
        </section>
      </section>

      {isAbout ? <Footer /> : <></>}
    </article>
  );
};

export default About;
