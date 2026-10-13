import BookAtableHeader from "./BookAtableHeader";
import Reservation from "../home/Reservation";
import Footer from "../home/Footer";
const BookAtable = () => {
  return (
    <article className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <BookAtableHeader />
        <article className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl">
            <Reservation />
          </div>
        </article>
      </div>
      <Footer />
    </article>
  );
};
export default BookAtable;