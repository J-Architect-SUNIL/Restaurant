import React, { Suspense } from "react";
import Hero from "./Hero";
import About from "../about/About";

const Services = React.lazy(() => import("./Services"));
const CateringServices = React.lazy(() => import("./CateringServices"));
const Menu = React.lazy(() => import("../menu/Menu"));
const MasterChef = React.lazy(() => import("./MasterChef"));
const Reservation = React.lazy(() => import("./Reservation"));
const TestimonialGuests = React.lazy(() => import("./TestimonialGuests"));
const RecentPosts = React.lazy(() => import("./RecentPosts"));
const Footer = React.lazy(() => import("./Footer"));

const Home = () => {
  const yoe = 18;
  const dish = 100;
  const tm = 50;
  const guest = 15000;

  return (
    <article className="w-full h-full">
      <Hero />
      <About />
      <Suspense fallback={<div className="min-h-50" />}>
        <Services yoe={yoe} dish={dish} tm={tm} guest={guest} />
        <CateringServices />
        <Menu />
        <MasterChef />
        <Reservation />
        <TestimonialGuests />
        <RecentPosts />
        <Footer />
      </Suspense>
    </article>
  );
};

export default Home;