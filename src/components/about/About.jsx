const About = () => {
  return (
<section className="w-full flex flex-col lg:flex-row px-6 lg:px-20 xl:px-40 gap-10 lg:gap-20">
      <section className="w-1/2 min-h-screen flex gap-7">
        <div className="w-full flex justify-center items-center overflow-hidden">
          <img
            src="/src/assets/Img/Main1Img.png"
            alt="Chef Image 1"
            className="scale-270"
          />
        </div>
        <div className="w-full flex justify-center items-center overflow-hidden pt-32">
          <img
            src="/src/assets/Img/Main2Img.png"
            alt="Chef Image 2"
            className="scale-240"
          />
        </div>
      </section>
      <section className="w-1/2 flex flex-col justify-center gap-5">
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

export default About;
