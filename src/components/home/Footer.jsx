import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { i1, i2, i3, i4, i5, i6 } from "../../assets/cloudinaryImages.js";
const Footer = () => {
  const instaImages = [
    {
      src: i1,
      alt: "Insta 1",
    },
    {
      src: i2,
      alt: "Insta 2",
    },
    {
      src: i3,
      alt: "Insta 3",
    },
    {
      src: i4,
      alt: "Insta 4",
    },
    {
      src: i5,
      alt: "Insta 5",
    },
    {
      src: i6,
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
  const handleSubscribe = (event) => {
    event.preventDefault();
  };
  return (
    <footer className="w-full bg-black text-white flex flex-col justify-between py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Feliciano</h3>
          <p className="text-amber-50/80 text-base sm:text-lg leading-relaxed max-w-xs">
            A neighbourhood restaurant cooking seasonal plates, fresh pasta and
            wood-fired mains, with a short list of wines we love.
          </p>
          <div className="flex space-x-5 pt-2 text-amber-50">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Feliciano on Twitter"
            >
              <FaTwitter
                className="w-6 h-6 cursor-pointer hover:text-[#c49b66] transition-colors"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Feliciano on Facebook"
            >
              <FaFacebookF
                className="w-6 h-6 cursor-pointer hover:text-[#c49b66] transition-colors"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Feliciano on Instagram"
            >
              <FaInstagram
                className="w-6 h-6 cursor-pointer hover:text-[#c49b66] transition-colors"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Open Hours</h3>
          <ul className="text-sm sm:text-base text-amber-50/80 space-y-2 w-full max-w-xs">
            {openingHours.map(({ day, time }) => (
              <li
                key={day}
                className="flex justify-between gap-4 border-b border-zinc-900 pb-1"
              >
                <span>{day}</span>
                <time className="font-medium text-white">{time}</time>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Instagram</h3>
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
            {instaImages.map((image) => (
              <div
                key={image.src}
                className="bg-zinc-800 h-20 rounded overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Newsletter</h3>
          <p className="text-amber-50/80 text-base sm:text-lg leading-relaxed">
            New dishes, wine evenings and seasonal menus, once a month.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Enter email address"
              autoComplete="email"
              required
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
      <div className="max-w-7xl mx-auto w-full pt-10 mt-12 border-t border-zinc-900 text-center text-sm sm:text-base text-amber-50/70">
        <p>
          © {new Date().getFullYear()} Feliciano Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
