import { NavLink } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { rp1, rp2, rp3 } from "../../assets/cloudinaryImages.js";
const RecentPosts = () => {
  const posts = [
    {
      name: "REBACA WELSON",
      image: rp1,
      alt: "Bartender pouring a drink into a glass",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 18, 2026",
      cn: 3,
    },
    {
      name: "JOHN SMOOTH",
      image: rp2,
      alt: "Dimly lit restaurant interior with a bar",
      description: "Meet Our Bar Team and Their Spring Cocktails",
      date: "Apr. 02, 2026",
      cn: 9,
    },
    {
      name: "LUKE SIMON",
      image: rp3,
      alt: "Pastry chef holding a slice of layered cake",
      description: "Behind the Scenes on a Busy Friday Night",
      date: "Apr. 20, 2026",
      cn: 5,
    },
  ];
  return (
    <article className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mb-12 text-center">
        Recent Posts
      </h2>
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {posts.map((p) => {
          return (
            <div
              key={p.image}
              className="w-full max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col p-6 gap-4 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 text-xs sm:text-sm text-gray-400 font-medium tracking-wider uppercase">
                    <time dateTime="2026-04-18">{p.date}</time>
                    <span>•</span>
                    <span>{p.name}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {p.description}
                  </h3>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-medium">
                  <NavLink
                    to={p.href}
                    className="text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    Read more →
                  </NavLink>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    <span>{p.cn}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};
export default RecentPosts;
