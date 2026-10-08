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

  const floatY = useTransform(smoothProgress, [0, 1], ["60px", "-60px"]);

  return (
    <article
      ref={articleRef}
      className="relative h-screen min-h-150 w-full overflow-hidden bg-cover bg-center flex items-center pl-40"
      style={{
        backgroundImage: "url('/src/assets/Img/restaurant_bg.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.section
        style={{ y: floatY }}
        className="h-full w-full max-w-4xl flex items-center justify-center px-4"
      >
        <div className="bg-white shadow-2xl p-8 w-[85%] h-[80%] flex flex-col justify-center items-center gap-2">
          <h2 className="text-6xl font-extrabold mb-6 text-gray-800">
            Make Reservation
          </h2>
          <section className="w-full h-[65%] flex gap-[5%]">
            <div className="w-[47%] h-full flex flex-col gap-4">
              <section className="w-full flex flex-col gap-4">
                <label htmlFor="Name" className="text-xl font-bold">Name</label>
                <input type="text" id="Name" name="name" placeholder="Your Name" className="h-15 p-5 border border-gray-300 text-xl"/>
              </section>
              <section className="w-full flex flex-col gap-4">
                <label htmlFor="Phone" className="text-xl font-bold">Phone</label>
                <input type="number" id="Phone" name="phone" placeholder="Phone" className="h-15 p-5 border border-gray-300 text-xl"/>
              </section>
              <section className="w-full flex flex-col gap-4">
                <label htmlFor="Time" className="text-xl font-bold">Time</label>
                <input type="time" id="Time" name="time" className="h-15 p-5 border border-gray-300 text-xl"/>
              </section>
            </div>
            <div className="w-[47%] h-full flex flex-col gap-4">
              <section className="w-full flex flex-col gap-4">
                <label htmlFor="Email" className="text-xl font-bold">Email</label>
                <input type="email" id="Email" name="email" placeholder="Your Email" className="h-15 p-5 border border-gray-300 text-xl"/>
              </section>
              <section className="w-full flex flex-col gap-4">
                <label htmlFor="Date" className="text-xl font-bold">Date</label>
                <input type="date" id="Date" name="date" className="h-15 p-5 border border-gray-300 text-xl"/>
              </section>
              <section className="w-full flex flex-col gap-4">
                <label htmlFor="Guests" className="text-xl font-bold">Guests</label>
                <select name="guests" id="Guests" className="h-15 px-5 border border-gray-300 text-xl">
                    <option value="" selected disabled>Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                </select>
              </section>
            </div>
            
          </section>
          <button className="w-70 h-15 text-2xl bg-yellow-600 mt-7 rounded border border-yellow-600 hover:bg-white hover:text-yellow-600">
            Make a Reservation
          </button>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4"></form>
        </div>
      </motion.section>
    </article>
  );
};

export default ReservationSection;
