import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ReservationSection = () => {
  let userDetails = {};
  let [] = useState();

  const articleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
  });

  const floatY = useTransform(smoothProgress, [0, 1], ["60px", "-60px"]);

  return (
    <article
      ref={articleRef}
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
      style={{
        backgroundImage: "url('/src/assets/Img/restaurant_bg.png')",
        backgroundAttachment: "fixed",
      }}>
      <motion.section
        style={{ y: floatY }}
        className="w-full max-w-6xl flex items-center py-8 sm:py-10 md:py-12">
        <form className="bg-white shadow-2xl w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-4 text-gray-800 text-center">
            Make Reservation
          </h2>

          <section className="w-full flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-8">
            <section className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5">
              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <label
                  htmlFor="name"
                  className="text-base sm:text-lg md:text-xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-12 sm:h-13 md:h-15 px-4 sm:px-5 border border-gray-300 text-base sm:text-lg md:text-xl"/>
              </div>

              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <label
                  htmlFor="phone"
                  className="text-base sm:text-lg md:text-xl font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full h-12 sm:h-13 md:h-15 px-4 sm:px-5 border border-gray-300 text-base sm:text-lg md:text-xl"/>
              </div>

              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <label
                  htmlFor="time"
                  className="text-base sm:text-lg md:text-xl font-bold">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full h-12 sm:h-13 md:h-15 px-4 sm:px-5 border border-gray-300 text-base sm:text-lg md:text-xl"/>
              </div>
            </section>

            <section className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5">
              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <label
                  htmlFor="email"
                  className="text-base sm:text-lg md:text-xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full h-12 sm:h-13 md:h-15 px-4 sm:px-5 border border-gray-300 text-base sm:text-lg md:text-xl"/>
              </div>

              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <label
                  htmlFor="date"
                  className="text-base sm:text-lg md:text-xl font-bold">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full h-12 sm:h-13 md:h-15 px-4 sm:px-5 border border-gray-300 text-base sm:text-lg md:text-xl"/>
              </div>

              <div className="w-full flex flex-col gap-2 sm:gap-3">
                <label
                  htmlFor="guests"
                  className="text-base sm:text-lg md:text-xl font-bold">
                  Guests
                </label>
                <select
                  name="guests"
                  id="guests"
                  className="w-full h-12 sm:h-13 md:h-15 px-4 sm:px-5 border border-gray-300 text-base sm:text-lg md:text-xl">
                  <option value="">Guests</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </section>
          </section>

          <button className="w-full sm:w-64 md:w-70 h-12 sm:h-13 md:h-15 text-lg sm:text-xl md:text-2xl bg-yellow-600 rounded border border-yellow-600 hover:bg-white hover:text-yellow-600 transition duration-300">
            Make a Reservation
          </button>
        </form>
      </motion.section>
    </article>
  );
};

export default ReservationSection;
