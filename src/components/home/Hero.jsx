import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden pt-36 sm:pt-28 lg:pt-36 pb-6">
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src="/src/assets/Img/bg_1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60" />
      </div>

      <div className="w-full flex-1 flex justify-between items-center px-4 sm:px-8 mt-auto mb-auto lg:my-auto">
        <ChevronLeft className="w-6 h-6 sm:w-10 sm:h-10 cursor-pointer hover:text-yellow-500 transition-colors shrink-0" />
        <section className="flex flex-col justify-center items-center text-center gap-2 sm:gap-4 px-2">
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-500">
            Feliciano
          </p>
          <p className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest font-light">
            BEST RESTAURANT
          </p>
        </section>
        <ChevronRight className="w-6 h-6 sm:w-10 sm:h-10 cursor-pointer hover:text-yellow-500 transition-colors shrink-0" />
      </div>

      <hr className="border-gray-600/60 w-[90%] sm:w-[95%] mx-auto my-4 lg:my-6" />

      <section className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto shrink-0 lg:gap-x-30">
        <div className="card flex flex-col justify-center items-center text-center gap-1 sm:gap-2">
          <img
            src="/src/assets/Img/breakfast-1.jpg"
            alt="Pad Thai with Tofu"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-500/50 shadow-lg"
          />
          <p className="text-base sm:text-lg font-semibold">
            Pad Thai with Tofu
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            Rice noodles, Tofu, Peanuts, Spring onion
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center text-center gap-1 sm:gap-2">
          <img
            src="/src/assets/Img/breakfast-2.jpg"
            alt="Grilled Halloumi Salad"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-500/50 shadow-lg"
          />
          <p className="text-base sm:text-lg font-semibold">
            Grilled Halloumi Salad
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            Halloumi, Spinach, Cucumber, Cranberries
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center text-center gap-1 sm:gap-2">
          <img
            src="/src/assets/Img/breakfast-3.jpg"
            alt="Banana Oat Porridge"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-500/50 shadow-lg"
          />
          <p className="text-base sm:text-lg font-semibold">
            Banana Oat Porridge
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            Oats, Banana, Flaxseed, Honey
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center text-center gap-1 sm:gap-2">
          <img
            src="/src/assets/Img/breakfast-4.jpg"
            alt="Poached Egg Plate"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-500/50 shadow-lg"
          />
          <p className="text-base sm:text-lg font-semibold">
            Poached Egg Plate
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            Egg, Avocado, Broccolini, Rye bread
          </p>
        </div>
      </section>
    </section>
  );
};

export default Hero;