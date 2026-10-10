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

  const totalDots = testimonials.length - 2;

  return (
    <article className="max-w-7xl min-h-screen mx-auto overflow-hidden flex flex-col gap-10 justify-center items-center">
      <section className="w-full flex flex-col items-center justify-center mb-15">
        <p className="text-9xl text-[#b89552] font-['Great_Vibes']">
          Testimony
        </p>
        <p className="font-bold text-6xl">Happy Guests</p>
      </section>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {testimonials.map((item) => (
          <div key={item.id} className="w-1/3 shrink-0 px-4 text-center">
            <div className="relative inline-block mb-12">
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 rounded-full object-cover mx-auto"
              />
              <span className="absolute bottom-0 right-0 bg-[#c49a6c] text-white w-10 h-10 rounded-full font-serif shadow-sm">
                <p className="pt-0 lg:pt-1 text-7xl">“</p>
              </span>
            </div>
            <p className="text-gray-600 text-xl leading-relaxed mb-9 h-16 flex items-center justify-center">
              {item.quote}
            </p>
            <h3 className="text-gray-900 font-semibold text-2xl mb-3">
              {item.name}
            </h3>
            <p className="text-xs upercase font-semibold tracking-widest text-gray-400 mt-1 uppercase">
              {item.role}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2.5 mt-10">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === index
                ? "bg-[#c49a6c]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </article>
  );
};

export default TestimonialGuests;
