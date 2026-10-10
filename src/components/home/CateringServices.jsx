import { useState, useRef } from "react";
import { Cake, ConciergeBell, Handshake } from "lucide-react";

const CateringServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    {
      icon: Cake,
      title: "Birthday Party",
      description: "We bake the cake, set a long table and plan a menu...",
    },
    {
      icon: Handshake,
      title: "Business Meetings",
      description: "A quiet room, fast service and a set lunch menu...",
    },
    {
      icon: ConciergeBell,
      title: "Wedding Party",
      description: "Seasonal menus, a wine pairing and our team on the day...",
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center gap-8 sm:gap-16 overflow-hidden">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center tracking-tight text-gray-900">
        Catering Services
      </h2>

      <div className="w-full max-w-7xl">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 sm:gap-12 lg:gap-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0"
        >
          {services.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.title}
                className="w-full min-w-full md:min-w-0 md:max-w-sm shrink-0 snap-center text-center flex flex-col justify-center items-center gap-4 p-6 rounded-lg transition-transform hover:-translate-y-1 duration-300 bg-white md:bg-transparent shadow-sm md:shadow-none border md:border-none border-gray-100"
              >
                <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-[#C8A97E] shrink-0" />
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {s.title}
                </p>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xs sm:max-w-none">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#C8A97E]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CateringServices;
