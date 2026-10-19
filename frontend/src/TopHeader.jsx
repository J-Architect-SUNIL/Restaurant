import React from "react";

const TopHeader = React.memo(() => {
  return (
    <section className="w-full flex flex-col sm:flex-row justify-center items-center text-center py-2 px-4 text-xs sm:text-sm lg:gap-50 sm:gap-8 z-30 absolute top-0 left-0 right-0 text-white bg-black/40 border-b border-white/10 transition-colors">
      <p>+1 (555) 012-3456</p>
      <p>info@yourdomain.com</p>
      <p>Open hours: Monday - Sunday 11:00 AM - 10:00 PM</p>
    </section>
  );
});

TopHeader.displayName = "TopHeader";
export default TopHeader;