import { useState, useRef } from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const MasterChef = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllDesktop, setShowAllDesktop] = useState(false);
  const scrollRef = useRef(null);

  const chef = [
    {
      name: "John Smooth",
      image: "/src/assets/Img/chef-1.png",
      alt: "Chef John Smooth",
      designation: "Restaurant Owner",
    },
    {
      name: "Rebeca Welson",
      image: "/src/assets/Img/chef-2.png",
      alt: "Chef Rebeca Welson",
      designation: "Head Chef",
    },
    {
      name: "Kharl Branyt",
      image: "/src/assets/Img/chef-3.png",
      alt: "Chef Kharl Branyt",
      designation: "Chef",
    },
    {
      name: "Luke Simon",
      image: "/src/assets/Img/chef-4.png",
      alt: "Chef Luke Simon",
      designation: "Chef",
    },
  ];

  const visibleChefsDesktop = showAllDesktop ? chef : chef.slice(0, 4);

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
    <article className="w-full flex flex-col items-center gap-10 sm:gap-16 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center text-center">
        <p className="text-5xl sm:text-7xl lg:text-9xl text-[#b89552] font-['Great_Vibes']">
          Chef
        </p>
        <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mt-2 sm:mt-0">
          Our Master Chef
        </h2>
      </section>

      <div className="w-full max-w-7xl">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-4"
        >
          {chef.map((c) => (
            <div
              key={c.name}
              className="w-full min-w-full sm:min-w-[50%] shrink-0 snap-center flex justify-center"
            >
              <div className="w-full max-w-xs flex flex-col items-center text-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="w-full h-72 sm:h-80 overflow-hidden rounded-md">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xl font-bold text-gray-900 mt-1">{c.name}</p>
                <p className="text-sm text-gray-500 font-medium">
                  {c.designation}
                </p>
                <div className="flex gap-4 text-gray-600 mt-1">
                  <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-[#b89552] transition-colors" />
                  <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#b89552] transition-colors" />
                  <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#b89552] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {chef.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#b89552]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to chef slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-10 justify-items-center">
          {visibleChefsDesktop.map((c) => (
            <div
              key={c.name}
              className="w-full max-w-xs flex flex-col items-center text-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full h-80 overflow-hidden rounded-md">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xl font-bold text-gray-900 mt-1">{c.name}</p>
              <p className="text-sm text-gray-500 font-medium">
                {c.designation}
              </p>
              <div className="flex gap-4 text-gray-600 mt-1">
                <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-[#b89552] transition-colors" />
                <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#b89552] transition-colors" />
                <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#b89552] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {chef.length > 4 && (
          <div className="hidden lg:flex justify-center mt-10">
            <button
              onClick={() => setShowAllDesktop(!showAllDesktop)}
              className="px-6 py-2.5 bg-[#b89552] text-white font-medium rounded-md hover:bg-[#a38243] transition-colors shadow-sm"
            >
              {showAllDesktop ? "Show Less" : `See All (${chef.length})`}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default MasterChef;