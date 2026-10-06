const MainContent = () => {
  return (
    <section className="w-full h-screen bg-amber-300 flex p-30">
      <section className="w-[50%] h-full flex gap-7">
        <div className="w-full h-full bg-amber-800 flex justify-center items-center overflow-hidden">
          <img
            src="/src/assets/Img/Main1Img.png"
            alt=""
            className="scale-250"
          />
        </div>
        <div className="w-full h-full bg-amber-800 flex justify-center items-center overflow-hidden">
          <img
            src="/src/assets/Img/Main2Img.png"
            alt=""
            className="scale-220"
          />
        </div>
      </section>
      <section className="w-[50%]">
        <p>Feliciano</p>
        <p>Restaurant</p>
        <p>
          Feliciano is a neighbourhood kitchen where the menu follows the
          market: fresh pasta made every morning, fish from the day boats and
          vegetables from two small farms outside the city. Come for a quick
          lunch or stay for a long dinner.
        </p>
        <p>Mon - Sun 11 AM - 10 PM</p>
        <p>+1 (555) 012-3456</p>
      </section>
    </section>
  );
};

export default MainContent;
