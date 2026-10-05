import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <article className="w-full h-full">
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src="/src/assets/Img/bg_1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/60" />
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-5">
        <ChevronLeft size={30} />
        <ChevronRight size={30} />
      </div>
    </article>
  );
};

export default Home;
