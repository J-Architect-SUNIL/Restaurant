import CateringServices from "./CateringServices";
import Hero from "./Hero";
import About from "../about/About";
import MasterChef from "./MasterChef";
import ReservationSection from "./ReservationSection";
import Services from "./Services";
import Menu from "../menu/Menu";
import TestimonialGuests from "./TestimonialGuests";
import RecentPosts from "./RecentPosts";
import Footer from "./Footer";

const Home = () => {
  const yoe = 18;
  const dish = 100;
  const tm = 50;
  const guest = 15000;
  return (
    <article className="w-full h-full">
      <Hero />
      <About />
      <Services yoe={yoe} dish={dish} tm={tm} guest={guest} />
      <CateringServices />
      <Menu />
      <MasterChef />
      <ReservationSection />
      <TestimonialGuests />
      <RecentPosts />
      <Footer />
    </article>
  );
};

export default Home;
