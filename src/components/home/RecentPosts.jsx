import { MessageCircle } from "lucide-react";

const RecentPosts = () => {
  const Rposts = [
    {
      name: "REBACA WELSON",
      image: "/src/assets/Img/rp1.png",
      alt: "Chef",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 18 2026",
      cn: 3,
    },
    {
      name: "JOHN SMOOTH",
      image: "/src/assets/Img/rp2.png",
      alt: "Chef",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 02 2026",
      cn: 3,
    },
    {
      name: "LUKE SIMON",
      image: "/src/assets/Img/rp3.png",
      alt: "Chef",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 20 2026",
      cn: 3,
    },
  ];

  return (
    <article className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mb-12 text-center">
        Recent Posts
      </h2>
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Rposts.map((p, index) => {
          return (
            <div
              key={index}
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
                    <span>{p.date}</span>
                    <span>•</span>
                    <span>{p.name}</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {p.description}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-medium">
                  <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
                    Read more →
                  </button>
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
