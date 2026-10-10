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
    <article className="w-full min-h-screen flex flex-col justify-center items-center pt-30 gap-25">
      <p className="font-bold text-6xl">Recent Posts</p>
      <article className="w-full h-full mx-auto overflow-hidden flex flex-wrap gap-10 justify-center items-center">
        {Rposts.map((p) => {
          return (
            <section className="w-1/4  h-[70vh] flex flex-col gap-4 border border-gray-200">
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="rounded scale-120 w-full h-full"
                />
              </div>
              <div className="flex flex-col p-5 gap-5">
                <div className="flex gap-3">
                  <p>{p.date}</p>
                  <p>{p.name}</p>
                </div>
                <p className="text-3xl font-bold">{p.description}</p>
                <div className="flex justify-between">
                  <button>Read more</button>
                  <div className="flex gap-2">
                    <MessageCircle /> {p.cn}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </article>
      <div className="w-full h-[10vh]"></div>
    </article>
  );
};

export default RecentPosts;
