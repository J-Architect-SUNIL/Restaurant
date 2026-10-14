import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
const Home = lazy(() => import("../components/home/Home.jsx"));
const About = lazy(() => import("../components/about/About.jsx"));
const Menu = lazy(() => import("../components/menu/Menu.jsx"));
const Stories = lazy(() => import("../components/stories/Stories.jsx"));
const Contact = lazy(() => import("../components/contact/Contact.jsx"));
const BookAtable = lazy(() =>
  import("../components/booking/BookAtable.jsx"),
);
const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/menu", element: <Menu /> },
        { path: "/stories", element: <Stories /> },
        { path: "/contact", element: <Contact /> },
        { path: "/bookAtable", element: <BookAtable /> },
      ],
    },
  ]);
const MainRouting = () => {
  return <RouterProvider router={allRoutes} />;
};
export default MainRouting;