import {Cake, ConciergeBell, Handshake } from "lucide-react";
import React from "react";

const CateringServices = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-25">
      <h2 className="text-7xl font-bold">Catering Services</h2>
      <section className="flex gap-20 justify-center items-center">
        <div className="w-[21%] text-center flex flex-col justify-center items-center gap-5">
          <Cake size={70} color="#C8A97E"/>
          <p className="text-2xl font-bold">Birthday Party</p>
          <p className="text-xl text-gray-500">
            We bake the cake, set a long table and plan a menu for the birthday
            guest, from six to sixty people.
          </p> 
        </div>
        <div className="w-[21%] text-center flex flex-col justify-center items-center gap-5">
          <Handshake size={70} color="#C8A97E"/>
          <p className="text-2xl font-bold">Business Meetings</p>
          <p className="text-xl text-gray-500">
            A quiet room, fast service and a set lunch menu, with a screen for presentations on request.
          </p> 
        </div>
        <div className="w-[21%] text-center flex flex-col justify-center items-center gap-5">
          <ConciergeBell size={70} color="#C8A97E"/>
          <p className="text-2xl font-bold">Wedding Party</p>
          <p className="text-xl text-gray-500">
            Seasonal menus, a wine pairing and our team on the day, in our dining room or at your venue.
          </p> 
        </div>
      </section>
    </section>
  );
};

export default CateringServices;
