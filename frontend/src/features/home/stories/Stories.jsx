import { useState } from "react";
import { NavLink } from "react-router-dom";
import StoriesHeader from "./StoriesHeader";
import Footer from "../pages/Footer";
import { rp1, rp2, rp3, rp4, rp5, rp6 } from "../../../assets/cloudinaryImages.js";
const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const posts = [
    {
      name: "REBACA WELSON",
      image: rp1,
      alt: "Bartender pouring a drink into a glass",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 18, 2026",
    },
    {
      name: "JOHN SMOOTH",
      image: rp2,
      alt: "Dimly lit restaurant interior with a bar",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 02, 2026",
    },
    {
      name: "LUKE SIMON",
      image: rp3,
      alt: "Pastry chef holding a slice of layered cake",
      description: "Our New Terrace Opens for the Season",
      date: "Apr. 20, 2026",
    },
    {
      name: "REBACA WELSON",
      image: rp4,
      alt: "Green cocktail garnished with mint on a wooden counter",
      description: "How Our Pastry Corner Bakes Every Morning",
      date: "Mar. 06, 2026",
    },
    {
      name: "KHARL BRANYT",
      image: rp5,
      alt: "Overhead view of a restaurant dining room and tables",
      description: "Five Alcohol-Free Drinks Worth Ordering",
      date: "Feb. 19, 2026",
    },
    {
      name: "JOHN SMOOTH",
      image: rp6,
      alt: "Restaurant dining room with tables and pendant lights",
      description: "Planning a Private Dinner With Us",
      date: "Feb. 19, 2026",
    },
  ];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <StoriesHeader />
        <section className="w-full flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-20">
          <section aria-label="Stories" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {currentPosts.map((p, index) => (
              <article
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
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                      {p.description}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-medium">
                    <NavLink
                      to={`/stories/${p.slug}`}
                      className="text-yellow-600 hover:text-yellow-700
             focus-visible:outline
             focus-visible:outline-offset-2"
                    >
                      Read more →
                    </NavLink>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <nav
            aria-label="Stories pagination"
            className="flex justify-center items-center gap-2 mt-16"
          >
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#c8a97e] transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  type="button"
                  aria-label={`Page ${number}`}
                  aria-current={currentPage === number ? "page" : undefined}
                  onClick={() => handlePageChange(number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg border border-[#c8a97e] text-sm font-medium transition-colors cursor-pointer ${
                    currentPage === number
                      ? "bg-[#c8a97e] text-white"
                      : "bg-white text-[#c8a97e] hover:bg-[#c8a97e]/10"
                  }`}
                >
                  {number}
                </button>
              ),
            )}
            <button
              type="button"
              aria-label="Next page"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#c8a97e] transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </nav>
        </section>
      </div>
      <Footer />
    </main>
  );
};
export default Stories;
