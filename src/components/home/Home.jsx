import Hero from "./Hero";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <article className="w-full h-screen gap-6">
      <div className="w-full">
        <Hero />
      </div>
      <MainContent />
    </article>
  );
};

export default Home;
