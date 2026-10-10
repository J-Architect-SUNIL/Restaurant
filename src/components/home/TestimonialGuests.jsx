import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ryan H.",
    role: "BUSINESS LUNCH",
    image: "/src/assets/Img/hg1.png",
    quote:
      "Quick set lunch, quiet room and great coffee. We book it for every client meeting now.",
  },
  {
    id: 2,
    name: "Jason M.",
    role: "REGULAR GUEST",
    image: "/src/assets/Img/hg2.png",
    quote:
      "The fresh pasta is the best in town, and the staff remember how we like our table. Our Friday night tradition now.",
  },
  {
    id: 3,
    name: "Mark S.",
    role: "BIRTHDAY DINNER",
    image: "/src/assets/Img/hg3.png",
    quote:
      "They planned the whole evening for twelve of us, cake included. Every plate came out hot and on time.",
  },
  {
    id: 4,
    name: "Sarah T.",
    role: "ANNIVERSARY",
    image: "/src/assets/Img/hg4.png",
    quote:
      "Exceptional ambiance and top-tier service. Made our anniversary dinner truly unforgettable.",
  },
];

const TestimonialGuests = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <article className="max-w-7xl min-h-screen mx-auto overflow-hidden flex flex-col gap-10 justify-center items-center py-16 px-4 sm:px-6">
      {/* Header Section */}
      <section className="w-full flex flex-col items-center justify-center text-center mb-6">
        <p className="text-5xl sm:text-7xl lg:text-9xl text-[#b89552] font-['Great_Vibes']">
          Testimony
        </p>
        <p className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mt-2">
          Happy Guests
        </p>
      </section>

      {/* Slider Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-4 text-center flex flex-col items-center justify-between"
            >
              <div className="relative inline-block mb-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto shadow-md"
                />
                <span className="absolute bottom-0 right-0 bg-[#c49a6c] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full font-serif shadow-sm flex items-center justify-center">
                  <p className="text-5xl sm:text-7xl leading-none">“</p>
                </span>
              </div>

              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 px-2">
                "{item.quote}"
              </p>
              <div>
                <h3 className="text-gray-900 font-semibold text-xl sm:text-2xl mb-1">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Indicator Buttons (Matching Previous Pill Style) */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-[#c49a6c]"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </article>
  );
};

export default TestimonialGuests;