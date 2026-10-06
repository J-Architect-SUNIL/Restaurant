import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col text-white">

      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src="/src/assets/Img/bg_1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/60" />
      </div>

      <div className="h-[40vh] flex justify-between items-center px-5 mt-50">
        <ChevronLeft size={30} />

        <section className="flex flex-col justify-center items-center gap-5">
          <p className="font-serif text-6xl text-yellow-500">
            Feliciano
          </p>

          <p className="font-serif text-6xl">
            BEST RESTAURANT
          </p>
        </section>

        <ChevronRight size={30} />
      </div>

      <hr className="text-gray-600 w-[95%] mx-auto mb-10" />

      <section className="w-full min-h-[20vh] flex gap-25 justify-center items-center">
        
        <div className="card flex flex-col justify-center items-center gap-2">
          <img
            src="/src/assets/Img/breakfast-1.jpg"
            alt=""
            className="w-30 rounded-[50%]"
          />
          <p className="text-2xl">Pad Thai with Tofu</p>
          <p className="text-lg">
            Rice noodles, Tofu, Peanuts, Spring onion
          </p>
        </div>

        <div className="card flex flex-col justify-center items-center gap-2">
          <img
            src="/src/assets/Img/breakfast-2.jpg"
            alt=""
            className="w-30 rounded-[50%]"
          />
          <p className="text-2xl">Grilled Halloumi Salad</p>
          <p className="text-lg">
            Halloumi, Spinach, Cucumber, Cranberries
          </p>
        </div>

        <div className="card flex flex-col justify-center items-center gap-2">
          <img
            src="/src/assets/Img/breakfast-3.jpg"
            alt=""
            className="w-30 rounded-[50%]"
          />
          <p className="text-2xl">Banana Oat Porridge</p>
          <p className="text-lg">
            Oats, Banana, Flaxseed, Honey
          </p>
        </div>

        <div className="card flex flex-col justify-center items-center gap-2">
          <img
            src="/src/assets/Img/breakfast-4.jpg"
            alt=""
            className="w-30 rounded-[50%]"
          />
          <p className="text-2xl">Poached Egg Plate</p>
          <p className="text-lg">
            Egg, Avocado, Broccolini, Rye bread
          </p>
        </div>

      </section>
    </section>
  );
};

export default Hero;