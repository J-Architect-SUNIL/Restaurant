import ContactHeader from "./ContactHeader";
import Footer from "../home/Footer";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <article className="w-full">
      <ContactHeader />
      <article className="w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch rounded-lg overflow-hidden bg-white shadow-xs border border-gray-100">
          <div className="w-full h-full min-h-87.5 lg:min-h-full bg-gray-100 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.7009595295794!2d78.45125127516584!3d17.42613298346764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzM0LjEiTiA3OMKwMjcnMTMuOCJF!5e0!3m2!1sen!2sin!4v1791789005448!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Feliciano Restaurant"
            ></iframe>
          </div>
          <div className="w-full p-6 sm:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-4 rounded-md border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8a97e] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-4 rounded-md border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8a97e] transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-4 rounded-md border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8a97e] transition-colors"
              />
              <textarea
                rows="6"
                placeholder="Message"
                required
                className="w-full px-4 py-4 rounded-md border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8a97e] transition-colors resize-none"
              ></textarea>
              <div className="mt-2">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#c8a97e] text-white font-medium text-sm rounded-md hover:bg-[#b5966a] transition-colors shadow-xs cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
      <Footer />
    </article>
  );
};
export default Contact;