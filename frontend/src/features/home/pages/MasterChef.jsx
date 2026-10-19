import { useState, useRef } from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { chef1, chef2, chef3, chef4 } from "../../../assets/cloudinaryImages.js";

const ChefCard = ({ chef, className, imageContainerClassName }) => (
  <article className={className}>
    <div className={imageContainerClassName}>
      <img
        src={chef.image}
        alt={chef.alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mt-1">{chef.name}</h3>
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
  </article>
);

const MasterChef = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const chefs = [
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
    const container = scrollRef.current;
    if (!container) return;

    const slides = Array.from(container.children);
    if (!slides.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };
  const scrollToSlide = (index) => {
    const container = scrollRef.current;
    const slide = container?.children[index];
    if (!container || !slide) return;
    container.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };
  return (
    <section aria-labelledby="master-chef-heading" className="w-full flex flex-col items-center gap-10 sm:gap-16 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <header className="w-full flex flex-col items-center justify-center text-center">
        <p className="text-5xl sm:text-7xl lg:text-9xl text-yellow-600 font-['Great_Vibes']">
          Chef
        </p>
        <h2 id="master-chef-heading" className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mt-2 sm:mt-0">
          Our Master Chef
        </h2>
      </header>
      <div className="w-full max-w-7xl">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-4"
        >
          {chefs.map((item) => (
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
          {chefs.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to ${item.name}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 rounded-full focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${
                activeIndex === index
                  ? "w-8 bg-[#b89552]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-10 justify-items-center">
          {chefs.map((item) => (
            <ChefCard
              key={item.name}
              chef={item}
              className="w-full max-w-xs flex flex-col items-center text-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              imageContainerClassName="w-full h-80 overflow-hidden rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MasterChef;
