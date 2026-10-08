import React from "react";

const SpecialMenu = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-25">
      <section className="w-full flex flex-col items-center justify-center">
        <p className="text-9xl text-[#b89552] font-['Great_Vibes']">
          Specialities
        </p>
        <p className="font-bold text-6xl">Our Menu</p>
      </section>
      <article className="w-[80%] flex flex-col h-full justify-center items-center border border-gray-300">
        <section className="w-full flex h-[35vh] justify-center items-center">
          <div className="w-[50%] h-full flex justify-center">
            <div className="w-[50%] h-full justify-center items-center overflow-hidden">
              <img
                src="/src/assets/Img/breakfast-1.jpg"
                alt=""
                className="w-full h-full scale-100"
              />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
              <div className="flex gap-10">
                <p className="font-bold">Pad Thai with Tofu</p>
                <p className="text-[#b89552] font-bold">$16</p>
              </div>
              <p>Rice noodles, Tofu, Peanuts, Spring onion</p>
              <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">Book now</button>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center">
            <div className="w-[50%] h-full justify-center items-center overflow-hidden">
              <img
                src="/src/assets/Img/breakfast-2.jpg"
                alt=""
                className="w-full h-full scale-100"
              />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
              <div className="flex gap-10">
                <p className="font-bold">Grilled Halloumi Salad</p>
                <p className="text-[#b89552] font-bold">$14</p>
              </div>
              <p>Halloumi, Spinach, Cucumber, Cranberries</p>
              <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">Book now</button>
            </div>
          </div>
        </section>
        <section className="w-full flex h-[35vh] justify-center items-center">
          <div className="w-[50%] h-full flex justify-center">
            <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
              <div className="flex gap-10">
                <p className="font-bold">Banana Oat Porridge</p>
                <p className="text-[#b89552] font-bold">$9</p>
              </div>
              <p>Oats, Banana, Flaxseed, Honey</p>
              <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">Book now</button>
            </div>
            <div className="w-[50%] h-full justify-center items-center overflow-hidden">
              <img
                src="/src/assets/Img/breakfast-3.jpg"
                alt=""
                className="w-full h-full scale-100"
              />
            </div>
            
          </div>
          <div className="w-[50%] h-full flex justify-center">
            <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
              <div className="flex gap-10">
                <p className="font-bold">Crispy Buttermilk Chicken</p>
                <p className="text-[#b89552] font-bold">$15</p>
              </div>
              <p>Chicken, Buttermilk, Parsley, Lemon</p>
              <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">Book now</button>
            </div>
            <div className="w-[50%] h-full justify-center items-center overflow-hidden">
              <img
                src="/src/assets/Img/breakfast-5.png"
                alt=""
                className="w-full h-full scale-100"
              />
            </div>
            
          </div>
        </section>
        <section className="w-full flex h-[35vh] justify-center items-center">
          <div className="w-[50%] h-full flex justify-center">
            <div className="w-[50%] h-full justify-center items-center overflow-hidden">
              <img
                src="/src/assets/Img/breakfast-6.png"
                alt=""
                className="w-full h-full scale-100"
              />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
              <div className="flex gap-10">
                <p className="font-bold">Avocado Toast</p>
                <p className="text-[#b89552] font-bold">$12</p>
              </div>
              <p>Sourdough, Avocado, Egg, Chili flakes</p>
              <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">Book now</button>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center">
            <div className="w-[50%] h-full justify-center items-center overflow-hidden">
              <img
                src="/src/assets/Img/breakfast-7.png"
                alt=""
                className="w-full h-full scale-100"
              />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
              <div className="flex gap-10">
                <p className="font-bold">Grilled Salmon Steak</p>
                <p className="text-[#b89552] font-bold">$19</p>
              </div>
              <p>Salmon, Avocado, Lettuce, Cherry tomato</p>
              <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">Book now</button>
            </div>
          </div>
        </section>
      </article>
      <div className="w-full h-[10vh]"></div>
    </section>
  );
};

export default SpecialMenu;
