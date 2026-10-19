import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import App from "../App";

const Home = lazy(() => import("../components/home/Home.jsx"));
const About = lazy(() => import("../components/about/About.jsx"));
const Menu = lazy(() => import("../components/menu/Menu.jsx"));
const Stories = lazy(() => import("../components/stories/Stories.jsx"));
const Contact = lazy(() => import("../components/contact/Contact.jsx"));
const BookAtable = lazy(() =>
  import("../components/booking/BookAtable.jsx")
);

function RouteErrorBoundary() {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "An unexpected error occurred.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-6 text-center">
      <h1 className="text-2xl font-bold">Unable to load this page</h1>
      <p role="alert">{message}</p>
      <a href="/" className="underline">
        Return to Home
      </a>
    </main>
  );
}

const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "stories", element: <Stories /> },
      { path: "contact", element: <Contact /> },
      { path: "bookAtable", element: <BookAtable /> },
    ],
  },
]);

const MainRouting = () => {
  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-screen items-center justify-center"
          role="status"
          aria-live="polite"
        >
          Loading page...
        </div>
      }
    >
      <RouterProvider router={allRoutes} />
    </Suspense>
  );
};

export default MainRouting;