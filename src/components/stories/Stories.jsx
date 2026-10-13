import { useState } from "react";
import { MessageCircle } from "lucide-react";
import StoriesHeader from "./StoriesHeader";
import Footer from "../home/Footer";
import rp1 from "../../assets/Img/rp1.png";
import rp2 from "../../assets/Img/rp2.png";
import rp3 from "../../assets/Img/rp3.png";
import rp4 from "../../assets/Img/rp4.png";
import rp5 from "../../assets/Img/rp5.png";
import rp6 from "../../assets/Img/rp6.png";
const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const posts = [
    {
      name: "REBACA WELSON",
      image: rp1,
      alt: "P1",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 18, 2026",
      cn: 3,
    },
    {
      name: "JOHN SMOOTH",
      image: rp2,
      alt: "P2",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 02, 2026",
      cn: 3,
    },
    {
      name: "LUKE SIMON",
      image: rp3,
      alt: "P3",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 20, 2026",
      cn: 3,
    },
    {
      name: "REBACA WELSON",
      image: rp4,
      alt: "P4",
      description: "How Our Pastry Corner Bakes Every Morning",
      date: "Mar. 06, 2026",
      cn: 3,
    },
    {
      name: "KHARL BRANYT",
      image: rp5,
      alt: "P5",
      description: "Five Alcohol-Free Drinks Worth Ordering",
      date: "Feb. 19, 2026",
      cn: 3,
    },
    {
      name: "JOHN SMOOTH",
      image: rp6,
      alt: "P6",
      description: "Planning a Private Dinner With Us",
      date: "Feb. 19, 2026",
      cn: 3,
    },
  ];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };
  return (
    <article className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <StoriesHeader />
        <section className="w-full flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-20">
          <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {currentPosts.map((p, index) => (
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
            ))}
          </section>
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#c8a97e] transition-colors"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg border border-[#c8a97e] text-sm font-medium transition-colors ${
                  currentPage === number
                    ? "bg-[#c8a97e] text-white"
                    : "bg-white text-[#c8a97e] hover:bg-[#c8a97e]/10"
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#c8a97e] transition-colors"
            >
              &gt;
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </article>
  );
};
export default Stories;