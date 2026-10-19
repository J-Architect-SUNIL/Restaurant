import { NavLink, useLocation } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import Footer from "../home/Footer";
import {
  breakfast1,
  breakfast2,
  breakfast3,
  breakfast5,
  breakfast6,
  breakfast7,
} from "../../assets/cloudinaryImages.js";
const Menu = () => {
  const location = useLocation();
  const isMenu = location.pathname === "/menu";
  const menuItem = [
    {
      image: breakfast1,
      alt: "Pad Thai with tofu, bean sprouts, spring onions, and crushed peanuts",
      content: "Pad Thai with Tofu",
      price: 150,
      description: "Rice noodles, Tofu, Peanuts, Spring onion",
      imageFirst: true,
    },
    {
      image: breakfast2,
      alt: "Grilled halloumi salad with leafy greens, tomatoes, and dressing",
      content: "Grilled Halloumi Salad",
      price: 99,
      description: "Halloumi, Spinach, Cucumber, Cranberries",
      imageFirst: true,
    },
    {
      image: breakfast3,
      alt: "Bowl of banana oat porridge topped with banana slices and seeds",
      content: "Banana Oat Porridge",
      price: 200,
      description: "Oats, Banana, Flaxseed, Honey",
      imageFirst: false,
    },
    {
      image: breakfast5,
      alt: "Crispy golden buttermilk chicken pieces garnished with parsley",
      content: "Crispy Buttermilk Chicken",
      price: 300,
      description: "Chicken, Buttermilk, Parsley, Lemon",
      imageFirst: false,
    },
    {
      image: breakfast6,
      alt: "Avocado toast topped with a poached egg and chili flakes",
      content: "Avocado Toast",
      price: 99,
      description: "Sourdough, Avocado, Egg, Chili flakes",
      imageFirst: true,
    },
    {
      image: breakfast7,
      alt: "Grilled salmon steak served with avocado, lettuce, and tomatoes",
      content: "Grilled Salmon Steak",
      price: 199,
      description: "Salmon, Avocado, Lettuce, Cherry tomato",
      imageFirst: true,
    },
  ];
  return (
    <article className="w-full">
      {isMenu ? <MenuHeader /> : null}
      <section className="w-full min-h-screen flex flex-col items-center gap-10 sm:gap-16 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {location.pathname === "/" ? 
        <section className="w-full flex flex-col items-center justify-center text-center">
          <p className="text-5xl sm:text-7xl lg:text-9xl text-yellow-600 font-['Great_Vibes']">
            Specialities
          </p>
          <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mt-2 sm:mt-0">
            Our Menu
          </h2>
        </section>
        :
        null  
      }
        <article className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {menuItem.map((item, index) => {
            const isLastRow = index >= menuItem.length - 2;
            const isRightColumn = index % 2 === 1;
            const isLastItem = index === menuItem.length - 1;

            return (
              <div
                key={item.content}
                className={`w-full flex flex-col ${
                  item.imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${!isLastItem ? "border-b" : ""} ${
                  isLastRow ? "lg:border-b-0" : "lg:border-b"
                } ${!isRightColumn ? "lg:border-r" : ""} border-gray-200 min-h-70`}
              >
                <div className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-between p-5 sm:p-6 lg:p-8 bg-white gap-4">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight">
                        {item.content}
                      </h3>
                      <p className="text-yellow-600 font-bold text-lg sm:text-xl shrink-0">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <NavLink
                    to="/bookAtable"
                    className="flex items-center justify-center w-full sm:w-36 h-10 sm:h-12 rounded border border-yellow-600 bg-yellow-600 text-white font-medium hover:bg-white hover:text-yellow-600 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
                  >
                    Book now
                  </NavLink>
                </div>
              </div>
            );
          })}
        </article>
      </section>
      {isMenu ? <Footer /> : null}
    </article>
  );
};
export default Menu;