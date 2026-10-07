const MainContent = () => {
  return (
    <section className="w-full h-screen flex px-40 gap-20">
      <section className="w-[50%] h-full flex gap-7">
        <div className="w-full h-[95%] flex justify-center items-center overflow-hidden">
          <img
            src="/src/assets/Img/Main1Img.png"
            alt=""
            className="scale-270"
          />
        </div>
        <div className="w-full h-[95%] flex justify-center items-center overflow-hidden self-end">
          <img
            src="/src/assets/Img/Main2Img.png"
            alt=""
            className="scale-240"
          />
        </div>
      </section>
      <section className="w-[50%] flex flex-col justify-center gap-5">
        <div className="w-full pt-6">
          <p className="text-9xl text-[#b89552] font-['Great_Vibes']">
            About
          </p>

          <h2 className="text-7xl font-bold leading-20">
            Feliciano
            <br />
            Restaurant
          </h2>
        </div>
        <p className="font-sans text-gray-400 text-xl leading-8">
          Feliciano is a neighbourhood kitchen where the menu follows the
          market: fresh pasta made every morning, fish from the day boats and
          vegetables from two small farms outside the city. Come for a quick
          lunch or stay for a long dinner.
        </p>
        <p className="text-gray-400 text-xl">
          Mon - Sun <span className="font-bold">11 AM - 10 PM</span>
        </p>
        <p className="text-yellow-800 font-bold text-5xl">+1 (555) 012-3456</p>
      </section>
    </section>
  );
};

export default MainContent;
