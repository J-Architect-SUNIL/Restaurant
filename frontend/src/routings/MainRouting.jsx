import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import App from "../App";

// Lazy loaded Public pages
const Home = lazy(() => import("../features/home/pages/Home.jsx"));
const About = lazy(() => import("../features/home/about/About.jsx"));
const Menu = lazy(() => import("../features/home/menu/Menu.jsx"));
const Stories = lazy(() => import("../features/home/stories/Stories.jsx"));
const Contact = lazy(() => import("../features/home/contact/Contact.jsx"));
const BookAtable = lazy(() => import("../features/home/booking/BookAtable.jsx"));
const SignIn = lazy(() => import("../features/home/auth/SignIn.jsx"));
const SignUp = lazy(() => import("../features/home/auth/SignUp.jsx"));

// Lazy loaded Dashboard components
const DashboardLayout = lazy(() => import("../features/dashboard/DashboardLayout.jsx"));
const UserOverview = lazy(() => import("../features/dashboard/user/pages/UserOverview.jsx"));
const UserReservations = lazy(()=> import("../features/dashboard/user/pages/UserReservations.jsx"));

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
  // 1. PUBLIC SITE ROUTES (Wrapped with TopHeader + Navbar via App.jsx)
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
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },

  // 2. DASHBOARD ROUTES (Independent layout with Sidebar, NO public navbar)
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <UserOverview /> },
      { path: "userreservations", element: <UserReservations /> },
      // Add other nested user/employee/admin dashboard routes here as needed
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