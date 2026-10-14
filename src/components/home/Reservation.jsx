import React, { useRef, useState, useMemo } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { NavLink } from "react-router-dom";
import { bg3 } from "../../assets/cloudinaryImages.js";

// Hoisted static date calculation to prevent re-running on every render
const getMinDate = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;
};

const Reservation = () => {
  const articleRef = useRef(null);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const minDate = useMemo(() => getMinDate(), []);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
  });

  // Parallax background layer movement (moves slower than scroll for depth)
  const bgY = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  
  // Floating motion for the form container
  const floatY = useTransform(smoothProgress, [0, 1], ["30px", "-30px"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissionMessage(
      "Online reservations are not available yet, so no reservation was sent. Please call us to book."
    );
  };

  return (
    <article
      ref={articleRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* GPU-Accelerated Parallax Background Layer */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgY }}
        className="absolute inset-[-20%] -z-20 bg-cover bg-center scale-110"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bg3})` }}
        />
      </motion.div>

      {/* Dark overlay for contrast and readability */}
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />

      {/* Floating Form Container */}
      <motion.section
        style={{ y: shouldReduceMotion ? 0 : floatY }}
        className="w-full max-w-4xl flex items-center justify-center z-10"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl w-full p-6 sm:p-8 lg:p-12 rounded-xl flex flex-col justify-center items-center gap-6"
        >
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
                  autoComplete="name"
                  required
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
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
                  autoComplete="tel"
                  required
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
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
                  required
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
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
                  autoComplete="email"
                  required
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
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
                  min={minDate}
                  required
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
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
                  required
                  className="w-full h-11 sm:h-12 px-4 border border-gray-300 rounded text-sm sm:text-base bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
                >
                  <option value="">Select number of guests</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-600">
                  For parties of more than 10, please{" "}
                  <NavLink
                    to="/contact"
                    className="text-yellow-700 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
                  >
                    contact us
                  </NavLink>
                  .
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full sm:w-72 h-12 sm:h-14 text-base sm:text-lg font-medium bg-yellow-600 text-white rounded border border-yellow-600 hover:bg-white hover:text-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 transition-colors duration-1000 mt-2"
          >
            Make a Reservation
          </button>
          {submissionMessage && (
            <p role="status" className="text-center text-sm text-gray-700">
              {submissionMessage}{" "}
              <a
                href="tel:+15550123456"
                className="font-semibold text-yellow-700 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1"
              >
                +1 (555) 012-3456
              </a>
            </p>
          )}
        </form>
      </motion.section>
    </article>
  );
};

export default React.memo(Reservation);