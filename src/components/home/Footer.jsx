import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const instaImages = [
    {
      src: "/src/assets/Img/i1.png",
      alt: "Insta 1",
    },
    {
      src: "/src/assets/Img/i2.png",
      alt: "Insta 2",
    },
    {
      src: "/src/assets/Img/i3.png",
      alt: "Insta 3",
    },
    {
      src: "/src/assets/Img/i4.png",
      alt: "Insta 4",
    },
    {
      src: "/src/assets/Img/i5.png",
      alt: "Insta 5",
    },
    {
      src: "/src/assets/Img/i6.png",
      alt: "Insta 6",
    },
  ];
  const openingHours = [
    { day: "Monday", time: "11:00 - 22:00" },
    { day: "Tuesday", time: "11:00 - 22:00" },
    { day: "Wednesday", time: "11:00 - 22:00" },
    { day: "Thursday", time: "11:00 - 22:00" },
    { day: "Friday", time: "11:00 - 23:30" },
    { day: "Saturday", time: "11:00 - 23:30" },
    { day: "Sunday", time: "11:00 - 22:00" },
  ];
  return (
    <footer className="w-full min-h-[70vh] bg-black text-white flex flex-col justify-between py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-8 ">{/*Feliciano*/}
          <h3 className="text-xl font-semibold tracking-wide">Feliciano</h3>
          <p className="text-amber-50 text-xl leading-relaxed max-w-xs">
            A neighbourhood restaurant cooking seasonal plates, fresh pasta and
            wood-fired mains, with a short list of wines we love.
          </p>
          <div className="flex space-x-5 pt-2">
              <FaTwitter size={30} />
              <FaFacebookF size={30} />
              <FaInstagram size={30} />
          </div>
        </div>
        <div className="flex flex-col space-y-8 ">{/*Open Hours*/}
          <h3 className="text-xl font-semibold tracking-wide">Open Hours</h3>
          <ul className="text-sx text-amber-50 space-y-2">
            {openingHours.map((oh) => (
              <li className="flex justify-between max-w-50">
                <span>{oh.day}</span> <span>{oh.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col h-full space-y-4">{/*Instagram*/}
          <h3 className="text-xl font-semibold h-1/5 tracking-wide">Instagram</h3>
          <div className="grid grid-cols-3 gap-2 w-full max-w-60">
            {instaImages.map((i) => (
              <div className="bg-zinc-800 h-20 overflow-hidden">
                <img
                  src={i.src}
                  alt={i.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-8 ">{/*NewsLetter*/}
          <h3 className="text-xl font-semibold tracking-wide">Newsletter</h3>
          <p className="text-amber-50 text-xl leading-relaxed">
            New dishes, wine evenings and seasonal menus, once a month.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-3 pt-2"
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-zinc-900 text-sm px-4 py-3 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#c49b66]"
            />
            <button
              type="submit"
              className="bg-[#c49b66] hover:bg-[#b08855] text-black font-medium text-sm py-3 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full pt-12 mt-12 border-t border-zinc-900 text-center text-xl text-amber-50">
        <p>
          Copyright ©2026 All rights reserved | This template is made with{" "}
          <span className="text-red-500">♥</span> by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
