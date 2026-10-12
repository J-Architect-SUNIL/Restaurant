import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bg1 from "../../assets/Img/bg_1.jpg";
import bg2 from "../../assets/Img/bg_2.png";
import bg3 from "../../assets/Img/bg_3.png";
import breakfast1 from "../../assets/Img/breakfast-1.jpg";
import breakfast2 from "../../assets/Img/breakfast-2.jpg";
import breakfast3 from "../../assets/Img/breakfast-3.jpg";
import breakfast4 from "../../assets/Img/breakfast-4.jpg";

const heroSlides = [
  {
    title: "BEST RESTAURANT",
    image: bg1,
  },
  {
    title: "NUTRITIOUS AND TASTY",
    image: bg2,
  },
  {
    title: "DELICIOUS SPECIALITIES",
    image: bg3,
  },
];
const foods = [
  {
    image: breakfast1,
    name: "Pad Thai with Tofu",
    ingredients: "Rice noodles, Tofu, Peanuts, Spring onion",
  },
  {
    image: breakfast2,
    name: "Grilled Halloumi Salad",
    ingredients: "Halloumi, Spinach, Cucumber, Cranberries",
  },
  {
    image: breakfast3,
    name: "Banana Oat Porridge",
    ingredients: "Oats, Banana, Flaxseed, Honey",
  },
  {
    image: breakfast4,
    name: "Poached Egg Plate",
    ingredients: "Egg, Avocado, Broccolini, Rye bread",
  },
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };
  return (
    <main className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden pt-36 sm:pt-28 lg:pt-36 pb-6">
      <div className="absolute inset-0 -z-10 bg-black">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60" />
      </div>
      <section className="w-full flex-1 flex justify-between items-center px-4 sm:px-8 mt-auto mb-auto lg:my-auto z-10">
        <ChevronLeft
          onClick={handlePrev}
          className="w-6 h-6 sm:w-10 sm:h-10 cursor-pointer hover:text-yellow-500 transition-colors shrink-0"
        />
        <div className="flex flex-col justify-center items-center text-center gap-2 sm:gap-4 px-2">
          <p className="font-['Great_Vibes'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-yellow-500">
            Feliciano
          </p>
          <p className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-light uppercase transition-all duration-300">
            {heroSlides[currentIndex].title}
          </p>
        </div>
        <ChevronRight
          onClick={handleNext}
          className="w-6 h-6 sm:w-10 sm:h-10 cursor-pointer hover:text-yellow-500 transition-colors shrink-0"
        />
      </section>
      <hr className="border-gray-600/60 w-[90%] sm:w-[95%] mx-auto my-4 lg:my-6" />
      <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto shrink-0 lg:gap-x-30">
        {foods.map((food) => (
          <div
            key={food.name}
            className="card flex flex-col justify-center items-center text-center gap-1 sm:gap-2"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-500/50 shadow-lg"
            />
            <h3 className="text-base sm:text-lg font-semibold">{food.name}</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {food.ingredients}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Hero;