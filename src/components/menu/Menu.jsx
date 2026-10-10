const Menu = () => {
  const menuItem = [
    {
      image: "/src/assets/Img/breakfast-1.jpg",
      alt: "breakfastImg1",
      content: "Pad Thai with Tofu",
      price: "150",
      description: "Rice noodles, Tofu, Peanuts, Spring onion",
      imageFirst: true,
    },
    {
      image: "/src/assets/Img/breakfast-2.jpg",
      alt: "breakfastImg2",
      content: "Grilled Halloumi Salad",
      price: "99",
      description: "Halloumi, Spinach, Cucumber, Cranberries",
      imageFirst: true,
    },
    {
      image: "/src/assets/Img/breakfast-3.jpg",
      alt: "breakfastImg3",
      content: "Banana Oat Porridge",
      price: "200",
      description: "Oats, Banana, Flaxseed, Honey",
      imageFirst: false,
    },
    {
      image: "/src/assets/Img/breakfast-5.png",
      alt: "breakfastImg5",
      content: "Crispy Buttermilk Chicken",
      price: "300",
      description: "Chicken, Buttermilk, Parsley, Lemon",
      imageFirst: false,
    },
    {
      image: "/src/assets/Img/breakfast-6.png",
      alt: "breakfastImg6",
      content: "Avocado Toast",
      price: "99",
      description: "Sourdough, Avocado, Egg, Chili flakes",
      imageFirst: true,
    },
    {
      image: "/src/assets/Img/breakfast-7.png",
      alt: "breakfastImg7",
      content: "Grilled Salmon Steak",
      price: "199",
      description: "Salmon, Avocado, Lettuce, Cherry tomato",
      imageFirst: true,
    },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-25">
      <section className="w-full flex flex-col items-center justify-center">
        <p className="text-9xl text-[#b89552] font-['Great_Vibes']">
          Specialities
        </p>
        <p className="font-bold text-6xl">Our Menu</p>
      </section>
      <article className="w-[80%] flex flex-wrap h-full justify-center items-center border border-gray-300">
        {menuItem.map((Item) => {
            return Item.imageFirst ? (
              <div key={Item.content} className="w-1/2 h-[35vh] flex justify-center">
                <div className="w-1/2 h-full justify-center items-center overflow-hidden">
                  <img
                    src={Item.image}
                    alt={Item.alt}
                    className="w-full h-full scale-100"
                  />
                </div>
                <div className="w-[50%] h-full flex flex-col justify-center p-5 gap-5 text-2xl">
                  <div className="flex gap-10">
                    <p className="font-bold">{Item.content}</p>
                    <p className="text-[#b89552] font-bold">₹{Item.price}</p>
                  </div>
                  <p>{Item.description}</p>
                  <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">
                    Book now
                  </button>
                </div>
              </div>
            ) : (
              <div key={Item.content} className="w-1/2 h-[35vh] flex justify-center">
                <div className="w-1/2 h-full flex flex-col justify-center p-5 gap-5 text-2xl">
                  <div className="flex gap-10">
                    <p className="font-bold">{Item.content}</p>
                    <p className="text-[#b89552] font-bold">₹{Item.price}</p>
                  </div>
                  <p>{Item.description}</p>
                  <button className="mt-3 w-35 h-12 rounded bg-yellow-600 hover:text-yellow-600 hover:bg-white border border-yellow-600">
                    Book now
                  </button>
                </div>
                <div className="w-[50%] h-full justify-center items-center overflow-hidden">
                  <img
                    src={Item.image}
                    alt={Item.alt}
                    className="w-full h-full scale-100"
                  />
                </div>
              </div>
            );
        })}
      </article>
      <div className="w-full h-[10vh]"></div>
    </section>
  );
};

export default Menu;
