import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const App = () => {
  return (
    <main className="relative w-full min-h-screen text-black overflow-x-hidden">
      <TopHeader />
      <Navbar />
      <Suspense
        fallback={
          <div
            className="min-h-screen flex items-center justify-center"
            role="status"
          >
            Loading page...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default React.memo(App);