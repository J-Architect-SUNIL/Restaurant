import BookAtableHeader from "./BookAtableHeader";
import Reservation from "../pages/Reservation";
import Footer from "../pages/Footer";
const BookAtable = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <BookAtableHeader />
        <section className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl">
            <Reservation />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
export default BookAtable;