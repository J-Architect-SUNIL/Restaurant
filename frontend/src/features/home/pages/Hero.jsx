import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FoodCard from "./FoodCard";
import {
  bg1,
  bg2,
  bg3,
  breakfast1,
  breakfast2,
  breakfast3,
  breakfast4,
} from "../../../assets/cloudinaryImages.js";

const HERO_SLIDES = [
  { id: "slide-1", title: "BEST RESTAURANT", image: bg1 },
  { id: "slide-2", title: "NUTRITIOUS AND TASTY", image: bg2 },
  { id: "slide-3", title: "DELICIOUS SPECIALITIES", image: bg3 },
];

const FOODS = [
  {
    id: "food-1",
    image: breakfast1,
    name: "Pad Thai with Tofu",
    ingredients: "Rice noodles, Tofu, Peanuts, Spring onion",
  },
  {
    id: "food-2",
    image: breakfast2,
    name: "Grilled Halloumi Salad",
    ingredients: "Halloumi, Spinach, Cucumber, Cranberries",
  },
  {
    id: "food-3",
    image: breakfast3,
    name: "Banana Oat Porridge",
    ingredients: "Oats, Banana, Flaxseed, Honey",
  },
  {
    id: "food-4",
    image: breakfast4,
    name: "Poached Egg Plate",
    ingredients: "Egg, Avocado, Broccolini, Rye bread",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload LCP image once on mount
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = bg1;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Slide rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  return (
    <section aria-label="Featured restaurant dishes" className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden pt-36 sm:pt-28 lg:pt-36 pb-6">
      <div className="absolute inset-0 -z-10 bg-black">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            aria-hidden="true"
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              index === currentIndex ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60" />
      </div>

      <section className="w-full flex-1 flex justify-between items-center px-4 sm:px-8 mt-auto mb-auto lg:my-auto z-10">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="rounded-full p-2 hover:text-yellow-500 focus-visible:outline focus-visible:outline-white"
        >
          <ChevronLeft aria-hidden="true" className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>
        <div className="flex flex-col justify-center items-center text-center gap-2 sm:gap-4 px-2">
          <p className="font-['Great_Vibes'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-yellow-500">
            Feliciano
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-light uppercase transition-all duration-300">
            {HERO_SLIDES[currentIndex].title}
          </h2>
        </div>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="rounded-full p-2 hover:text-yellow-500 focus-visible:outline focus-visible:outline-white"
        >
          <ChevronRight
            aria-hidden="true"
            className="w-6 h-6 sm:w-10 sm:h-10"
          />
        </button>
      </section>

      <hr className="border-gray-600/60 w-[90%] sm:w-[95%] mx-auto my-4 lg:my-6" />

      <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto shrink-0 lg:gap-x-30">
        {FOODS.map((food) => (
          <FoodCard
            key={food.id}
            image={food.image}
            name={food.name}
            ingredients={food.ingredients}
          />
        ))}
      </section>
    </section>
  );
};

export default React.memo(Hero);
