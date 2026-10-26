import React, { useState } from 'react';

const userFavouritesData = {
  heading: 'Favourites',
  title: 'Favourite dishes',
  subtitle: 'Save dishes from our menu for quick ordering.',
  dishes: [
    {
      id: 'pad-thai-with-tofu',
      title: 'Pad Thai with Tofu',
      price: '150',
      description: 'Rice noodles, Tofu, Peanuts, Spring onion',
      isFavourite: true,
    },
    {
      id: 'grilled-halloumi-salad',
      title: 'Grilled Halloumi Salad',
      price: '99',
      description: 'Halloumi, Spinach, Cucumber, Cranberries',
      isFavourite: false,
    },
    {
      id: 'banana-oat-porridge',
      title: 'Banana Oat Porridge',
      price: '200',
      description: 'Oats, Banana, Flaxseed, Honey',
      isFavourite: false,
    },
    {
      id: 'crispy-buttermilk-chicken',
      title: 'Crispy Buttermilk Chicken',
      price: '300',
      description: 'Chicken, Buttermilk, Parsley, Lemon',
      isFavourite: false,
    },
    {
      id: 'avocado-toast',
      title: 'Avocado Toast',
      price: '99',
      description: 'Sourdough, Avocado, Egg, Chili flakes',
      isFavourite: true,
    },
    {
      id: 'grilled-salmon-steak',
      title: 'Grilled Salmon Steak',
      price: '199',
      description: 'Salmon, Avocado, Lettuce, Cherry tomato',
      isFavourite: true,
    },
  ],
};

const UserFavourites = ({
  dishes = userFavouritesData.dishes,
  isLoading = false,
  onBookNow,
  onToggleFavourite,
}) => {
  const [favouriteList, setFavouriteList] = useState(dishes);

  // Toggle handler for local state & backend API hook
  const handleToggleFav = (dishId) => {
    setFavouriteList((prev) =>
      prev.map((dish) =>
        dish.id === dishId ? { ...dish, isFavourite: !dish.isFavourite } : dish
      )
    );

    if (onToggleFavourite) {
      onToggleFavourite(dishId);
    }
  };

  const handleBook = (dishId) => {
    if (onBookNow) {
      onBookNow(dishId);
    }
  };

  return (
    <div className="max-w-6xl space-y-6">
      {/* Page Header */}
      <header className="mb-8">
        <h2 className="font-serif text-3xl text-[#D4AF37] mb-1">
          {userFavouritesData.heading}
        </h2>
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
          {userFavouritesData.title}
        </h3>
        <p className="text-sm text-stone-500">
          {userFavouritesData.subtitle}
        </p>
      </header>

      {/* Dishes Grid (4 columns on desktop, matching image layout) */}
      {isLoading ? (
        <div className="p-8 text-center text-sm text-stone-400">Loading favourite dishes...</div>
      ) : favouriteList.length === 0 ? (
        <div className="p-8 text-center text-sm text-stone-400">No favourite dishes found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {favouriteList.map((dish) => (
            <article
              key={dish.id}
              className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-base mb-1.5 leading-tight">
                  {dish.title}
                </h4>
                <div className="text-sm font-bold text-[#D4AF37] mb-3">
                  ₹{dish.price}
                </div>
                <p className="text-xs text-stone-500 mb-6 line-clamp-3 leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleBook(dish.id)}
                  className="flex-1 bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-xs font-semibold py-2.5 px-2 rounded-xl transition-colors text-center leading-tight"
                >
                  Book now
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleFav(dish.id)}
                  className="flex-1 bg-stone-50 hover:bg-stone-100 text-[#1A1A1A] border border-stone-200 text-xs font-medium py-2.5 px-2 rounded-xl transition-colors text-center leading-tight"
                >
                  {dish.isFavourite ? 'Remove favourite' : 'Save favourite'}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserFavourites;