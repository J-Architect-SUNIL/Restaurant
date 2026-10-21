import React from "react";
import { toWords } from "number-to-words";

const getNumber = (value) => {
  if (
    (typeof value !== "number" && typeof value !== "string") ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return null;
  }
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
};

const Services = ({ yoe, dish, tm, guest }) => {
  const years = getNumber(yoe);
  const capitalizedWords =
    years === null
      ? null
      : toWords(years).replace(/^./, (char) => char.toUpperCase());

  const statistics = [
    { label: "YEARS OF EXPERIENCE", value: yoe },
    { label: "DISHES ON THE MENU", value: dish },
    { label: "TEAM MEMBERS", value: tm },
    { label: "HAPPY GUESTS", value: guest },
  ];

  return (
    <section aria-label="Restaurant statistics" className="w-full py-10 px-4 sm:px-8 lg:px-20 bg-amber-50/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
        {statistics.map((statistic) => {
          const value = getNumber(statistic.value);
          return (
            <dl
              key={statistic.label}
              className="flex flex-col-reverse items-center justify-center"
            >
              {/* Semantic order: <dt> comes first in DOM for screen readers */}
              <dt className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mt-1">
                {statistic.label}
              </dt>
              <dd className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-800">
                {value === null ? "—" : value.toLocaleString()}
              </dd>
            </dl>
          );
        })}
        <div className="col-span-2 lg:col-span-1 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-300 lg:pl-6">
          <p className="text-sm sm:text-base text-gray-700 italic font-serif leading-relaxed mx-auto max-w-md lg:max-w-none">
            {capitalizedWords
              ? `“${capitalizedWords} years of cooking for our neighbours, one plate at a time.”`
              : "“Cooking for our neighbours, one plate at a time.”"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
