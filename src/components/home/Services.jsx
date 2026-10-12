import { toWords } from "number-to-words";

const Services = ({ yoe, dish, tm, guest }) => {
  let words = toWords(yoe);
  const capitalizedWords = words.charAt(0).toUpperCase() + words.slice(1);

  return (
    <section className="w-full py-10 px-4 sm:px-8 lg:px-20 bg-amber-50/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-800">
            {yoe}
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mt-1">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-800">
            {dish}
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mt-1">
            DISHES ON THE MENU
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-800">
            {tm}
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mt-1">
            TEAM MEMBERS
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-800">
            {guest?.toLocaleString()}
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mt-1">
            HAPPY GUESTS
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-300 lg:pl-6">
          <p className="text-sm sm:text-base text-gray-700 italic font-serif leading-relaxed mx-auto max-w-md lg:max-w-none">
            "{capitalizedWords} years of cooking for our neighbours, one plate
            at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;