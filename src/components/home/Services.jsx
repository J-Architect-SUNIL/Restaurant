import { toWords } from "number-to-words";
const Services = ({ yoe, dish, tm, guest }) => {
  let words = toWords(yoe);
  return (
    <section className="w-full h-[30vh] flex justify-center items-center gap-30">
      <div>
        <p className="text-6xl font-bold text-yellow-800">{yoe}</p>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div>
        <p className="text-6xl font-bold text-yellow-800">{dish}</p>
        <p>DISHES ON THE MENU</p>
      </div>
      <div>
        <p className="text-6xl font-bold text-yellow-800">{tm}</p>
        <p>TEAM MEMBERS</p>
      </div>
      <div>
        <p className="text-6xl font-bold text-yellow-800">{guest}</p>
        <p>HAPPY GUESTS</p>
      </div>

      <div className="w-[15%] text-xl"><p>{words} years of cooking for our neighbours, one plate at a time.</p></div>
    </section>
  );
};

export default Services;
