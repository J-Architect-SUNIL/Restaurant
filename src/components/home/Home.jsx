import Hero from "./Hero";
import MainContent from "./MainContent";
import Services from "./Services";

const Home = () => {
  let yoe = 18;
    let dish = 100;
    let tm = 50;
    let guest = 15000;
  return (
    <article className="w-full h-screen gap-6">
      <div className="w-full">
        <Hero />
      </div>
      <MainContent />
      <Services yoe={yoe} dish={dish} tm={tm} guest={guest}/>
      
    </article>
  );
};

export default Home;
