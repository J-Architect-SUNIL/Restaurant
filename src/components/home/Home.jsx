import CateringServices from "./CateringServices";
import Hero from "./Hero";
import MainContent from "./MainContent";
import MasterChef from "./MasterChef";
import ReservationSection from "./ReservationSection";
import Services from "./Services";
import SpecialMenu from "./SpecialMenu";

const Home = () => {
  const yoe = 18;
  const dish = 100;
  const tm = 50;
  const guest = 15000;
  return (
    <article className="w-full h-full">
      <Hero />
      <MainContent />
      <Services yoe={yoe} dish={dish} tm={tm} guest={guest} />
      <CateringServices />
      <SpecialMenu />
      <MasterChef />
      <ReservationSection />
    </article>
  );
};

export default Home;
