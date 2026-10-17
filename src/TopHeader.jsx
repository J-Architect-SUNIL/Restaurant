import React from "react";

const TopHeader = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center text-center py-2 px-4 text-xs sm:text-sm gap-2 sm:gap-6 lg:gap-50 z-30 absolute top-0 left-0 right-0 text-white bg-black/40 border-b border-white/10 transition-colors">
      <a
        href="tel:+15550123456"
        className="hover:text-yellow-500 transition-colors focus-visible:outline focus-visible:outline-offset-2"
      >
        +1 (555) 012-3456
      </a>
      <a
        href="mailto:info@yourdomain.com"
        className="hover:text-yellow-500 transition-colors focus-visible:outline focus-visible:outline-offset-2"
      >
        info@yourdomain.com
      </a>
      <p>
        <span className="font-medium">Open hours:</span> Monday–Sunday, 11:00 AM–10:00 PM
      </p>
    </div>
  );
};

export default TopHeader;