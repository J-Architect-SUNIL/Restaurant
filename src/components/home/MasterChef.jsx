import { useState, useRef } from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  chef1,
  chef2,
  chef3,
  chef4,
} from "../../assets/cloudinaryImages.js";

const ChefCard = ({ chef, className, imageContainerClassName }) => (
  <div className={className}>
    <div className={imageContainerClassName}>
      <img
        src={chef.image}
        alt={chef.alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <p className="text-xl font-bold text-gray-900 mt-1">{chef.name}</p>
    <p className="text-sm text-gray-500 font-medium">{chef.designation}</p>
    <div className="flex gap-4 text-gray-600 mt-1">
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${chef.name} on X`}
      >
        <FaXTwitter
          className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition-colors"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${chef.name} on Facebook`}
      >
        <FaFacebookF
          className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition-colors"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${chef.name} on Instagram`}
      >
        <FaInstagram
          className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition-colors"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
);

const MasterChef = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const chef = [
    {
      name: "John Smooth",
      image: chef1,
      alt: "Chef John Smooth",
      designation: "Restaurant Owner",
    },
    {
      name: "Rebeca Welson",
      image: chef2,
      alt: "Chef Rebeca Welson",
      designation: "Head Chef",
    },
    {
      name: "Kharl Branyt",
      image: chef3,
      alt: "Chef Kharl Branyt",
      designation: "Chef",
    },
    {
      name: "Luke Simon",
      image: chef4,
      alt: "Chef Luke Simon",
      designation: "Chef",
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
    <article className="w-full flex flex-col items-center gap-10 sm:gap-16 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center text-center">
        <p className="text-5xl sm:text-7xl lg:text-9xl text-yellow-600 font-['Great_Vibes']">
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
          {chef.map((item) => (
            <div
              key={item.name}
              className="w-full min-w-full sm:min-w-[50%] shrink-0 snap-center flex justify-center"
            >
              <ChefCard
                chef={item}
                className="w-full max-w-xs flex flex-col items-center text-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                imageContainerClassName="w-full h-72 sm:h-80 overflow-hidden rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {chef.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#b89552]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to ${item.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-10 justify-items-center">
          {chef.map((item) => (
            <ChefCard
              key={item.name}
              chef={item}
              className="w-full max-w-xs flex flex-col items-center text-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              imageContainerClassName="w-full h-80 overflow-hidden rounded-md"
            />
          ))}
        </div>
      </div>
    </article>
  );
};
export default MasterChef;