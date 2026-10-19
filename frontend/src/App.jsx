import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="relative w-full min-h-screen text-black overflow-x-hidden">
      {/* Public Header & Nav */}
      <TopHeader />
      <Navbar />

      {/* Public Pages Content */}
      <Suspense
        fallback={
          <div
            className="flex min-h-[50vh] items-center justify-center"
            role="status"
            aria-live="polite"
          >
            Loading page...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;