import React from "react";

const FoodCard = React.memo(({ image, name, ingredients }) => {
  return (
    <div className="card flex flex-col justify-center items-center text-center gap-1 sm:gap-2">
      <img
        src={image}
        alt={name}
        loading="lazy"
        width="96"
        height="96"
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-500/50 shadow-lg"
      />
      <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
      <p className="text-xs sm:text-sm text-gray-300">{ingredients}</p>
    </div>
  );
});

FoodCard.displayName = "FoodCard";
export default FoodCard;