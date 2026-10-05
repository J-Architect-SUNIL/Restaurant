import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import Stories from "../components/stories/Stories";
import Contact from "../components/contact/Contact";
import BookAtable from "../components/booking/BookAtable";

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