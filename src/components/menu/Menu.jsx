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
    <section className="w-full min-h-screen flex flex-col items-center gap-10 sm:gap-16 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center text-center">
        <p className="text-5xl sm:text-7xl lg:text-9xl text-[#b89552] font-['Great_Vibes']">
          Specialities
        </p>
        <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mt-2 sm:mt-0">
          Our Menu
        </h2>
      </section>
      <article className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {menuItem.map((item) => {
          return (
            <div
              key={item.content}
              className={`w-full flex flex-col ${
                item.imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
              } border-b lg:border-b-0 border-gray-200 min-h-70`}
            >
              <div className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between p-5 sm:p-6 lg:p-8 bg-white gap-4">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <p className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight">
                      {item.content}
                    </p>
                    <p className="text-[#b89552] font-bold text-lg sm:text-xl shrink-0">
                      ₹{item.price}
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <button className="w-full sm:w-36 h-10 sm:h-12 rounded bg-yellow-600 text-white font-medium hover:text-yellow-600 hover:bg-white border border-yellow-600 transition-colors text-sm sm:text-base duration-1000">
                  Book now
                </button>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Menu;
