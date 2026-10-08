import { div } from "framer-motion/client";
import { Cake, ConciergeBell, Handshake } from "lucide-react";

const CateringServices = () => {
  const services = [
    {
      icon: Cake,
      title: "Birthday Party",
      description: "We bake the cake, set a long table and plan a menu...",
    },
    {
      icon: Handshake,
      title: "Business Meetings",
      description: "A quiet room, fast service and a set lunch menu...",
    },
    {
      icon: ConciergeBell,
      title: "Wedding Party",
      description: "Seasonal menus, a wine pairing and our team on the day...",
    },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-25">
      <h2 className="text-7xl font-bold">Catering Services</h2>
      <section className="flex gap-20 justify-center items-center">
        {services.map((s) => {
          return (
            <div key={s.title} className="max-w-xs text-center flex flex-col justify-center items-center gap-5">
              <s.icon size={70} color="#C8A97E" />
              <p className="text-2xl font-bold">{s.title}</p>
              <p className="text-xl text-gray-500">{s.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default CateringServices;
