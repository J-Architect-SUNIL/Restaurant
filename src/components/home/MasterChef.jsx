import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
const MasterChef = () => {
  const chef = [
    {
      name: "John Smooth",
      image: "/src/assets/Img/chef-1.png",
      alt: "Chef",
      designation: "Restaurant Owner",
    },
    {
      name: "Rebeca Welson",
      image: "/src/assets/Img/chef-2.png",
      alt: "Chef",
      designation: "Head Chef",
    },
    {
      name: "Kharl Branyt",
      image: "/src/assets/Img/chef-3.png",
      alt: "Chef",
      designation: "Chef",
    },
    {
      name: "Luke Simon",
      image: "/src/assets/Img/chef-4.png",
      alt: "Chef",
      designation: "Chef",
    },
  ];
  return (
    <article className="w-full min-h-screen flex flex-col items-center gap-25">
      <section className="w-full flex flex-col items-center justify-center">
        <p className="text-9xl text-[#b89552] font-['Great_Vibes']">Chef</p>
        <p className="font-bold text-6xl">Our Master Chef</p>
      </section>
      <article className="w-full h-full flex justify-center items-center gap-10">
        {chef.map((c) => {
          return (
            <section className="w-70 h-[60vh] flex flex-col gap-4">
              <img
                src={c.image}
                alt={c.alt}
                className="w-full h-[70%] rounded"
              />
              <p className="text-xl font-bold">{c.name}</p>
              <p>{c.designation}</p>
              <div className="flex gap-5">
                <FaXTwitter size={25} />
                <FaFacebookF size={25} />
                <FaInstagram size={25} />
              </div>
            </section>
          );
        })}
      </article>
    </article>
  );
};

export default MasterChef;
