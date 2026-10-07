import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
const MasterChef = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-25">
      <section className="w-full flex flex-col items-center justify-center">
        <p className="text-9xl text-[#b89552] font-['Great_Vibes']">Chef</p>
        <p className="font-bold text-6xl">Our Master Chef</p>
      </section>
      <article className="w-full h-full flex justify-center items-center gap-10">
        <section className="w-70 h-[60vh] flex flex-col gap-4">
          <img
            src="/src/assets/Img/chef-1.png"
            alt=""
            className="w-full h-[70%] rounded"
          />
          <p className="text-xl font-bold">John Smooth</p>
          <p>Restaurant Owner</p>
          <div className="flex gap-5">
            <FaXTwitter size={25}/>
            <FaFacebookF size={25}/>
            <FaInstagram size={25}/>
          </div>
        </section>
        <section className="w-70 h-[60vh] flex flex-col gap-4">
          <img
            src="/src/assets/Img/chef-2.png"
            alt=""
            className="w-full h-[70%] rounded"
          />
          <p className="text-xl font-bold">Rebeca Welson</p>
          <p>Head Chef</p>
          <div className="flex gap-5">
            <FaXTwitter size={25}/>
            <FaFacebookF size={25}/>
            <FaInstagram size={25}/>
          </div>
        </section>
        <section className="w-70 h-[60vh] flex flex-col gap-4">
          <img
            src="/src/assets/Img/chef-3.png"
            alt=""
            className="w-full h-[70%] rounded"
          />
          <p className="text-xl font-bold">Kharl Branyt</p>
          <p>Chef</p>
          <div className="flex gap-5">
            <FaXTwitter size={25}/>
            <FaFacebookF size={25}/>
            <FaInstagram size={25}/>
          </div>
        </section>
        <section className="w-70 h-[60vh] flex flex-col gap-4">
          <img
            src="/src/assets/Img/chef-4.png"
            alt=""
            className="w-full h-[70%] rounded"
          />
          <p className="text-xl font-bold">Luke Simon</p>
          <p>Chef</p>
          <div className="flex gap-5">
            <FaXTwitter size={25}/>
            <FaFacebookF size={25}/>
            <FaInstagram size={25}/>
          </div>
        </section>
      </article>
    </section>
  );
};

export default MasterChef;
