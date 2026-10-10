import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ReservationSection = () => {
  const articleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
  });

  const floatY = useTransform(smoothProgress, [0, 1], ["40px", "-40px"]);

  return (
    <article
      ref={articleRef}
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/src/assets/Img/restaurant_bg.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.section
        style={{ y: floatY }}
        className="w-full max-w-4xl flex items-center justify-center"
      >
        <form className="bg-white shadow-2xl w-full p-6 sm:p-8 lg:p-12 rounded-xl flex flex-col justify-center items-center gap-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center">
            Make Reservation
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm sm:text-base font-bold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm sm:text-base font-bold text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="time"
                  className="text-sm sm:text-base font-bold text-gray-700"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm sm:text-base font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="date"
                  className="text-sm sm:text-base font-bold text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="guests"
                  className="text-sm sm:text-base font-bold text-gray-700"
                >
                  Guests
                </label>
                <select
                  name="guests"
                  id="guests"
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base bg-white focus:outline-none focus:border-yellow-600"
                >
                  <option value="">Guests</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full sm:w-72 h-12 sm:h-14 text-base sm:text-lg font-medium bg-yellow-600 text-white rounded border border-yellow-600 hover:bg-white hover:text-yellow-600 transition-colors duration-1000 mt-2"
          >
            Make a Reservation
          </button>
        </form>
      </motion.section>
    </article>
  );
};

export default ReservationSection;
