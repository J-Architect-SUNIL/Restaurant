import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  isRouteErrorResponse,
  useRouteError,
  Navigate,
  useParams,
} from "react-router-dom";
import App from "../App";
import DashboardLayout, { role } from "../features/dashboard/DashboardLayout";

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
const UserOverview = lazy(() => import("../features/dashboard/user/pages/UserOverview.jsx"));
const UserReservations = lazy(() => import("../features/dashboard/user/pages/UserReservations.jsx"));
const UserOrders = lazy(() => import("../features/dashboard/user/pages/UserOrders.jsx"));
const UserFavourites = lazy(() => import("../features/dashboard/user/pages/UserFavourites.jsx"));
const UserProfile = lazy(() => import("../features/dashboard/user/pages/UserProfile.jsx"));

const AdminOverview = lazy(() => import("../features/dashboard/admin/AdminOverview.jsx"));
const Reservations = lazy(()=> import("../features/dashboard/shared/components/Reservations.jsx"));
const AdminOrders = lazy(()=> import("../features/dashboard/admin/AdminOrders.jsx"));
const AdminMenu = lazy(()=> import("../features/dashboard/admin/AdminMenu.jsx"));
const AdminUsers = lazy(()=> import("../features/dashboard/admin/AdminUsers.jsx"));
const AdminEmployees = lazy(()=> import("../features/dashboard/admin/AdminEmployees.jsx"));
const AdminSettings = lazy(()=> import("../features/dashboard/admin/AdminSettings.jsx"));

const EmployeeOverview = lazy(() => import("../features/dashboard/employee/EmployeeOverview.jsx"));
const EmployeeKitchenQueue = lazy(() => import("../features/dashboard/employee/EmployeeKitchenQueue.jsx"));
const EmployeeTables = lazy(() => import("../features/dashboard/employee/EmployeeTables.jsx"));
const EmployeeSchedule = lazy(() => import("../features/dashboard/employee/EmployeeSchedule.jsx"));
const EmployeeProfile = lazy(() => import("../features/dashboard/employee/EmployeeProfile.jsx"));
const SuperadminControlCenter = lazy(() => import("../features/dashboard/superadmin/SuperadminControlCenter.jsx"));

const userPages = {
  overview: UserOverview,
  reservations: UserReservations,
  orders: UserOrders,
  favourites: UserFavourites,
  profile: UserProfile,
};

const adminPages = {
  overview: AdminOverview,
  reservations: Reservations,
  orders: AdminOrders,
  menu: AdminMenu,
  users: AdminUsers,
  settings: AdminSettings,
};

const employeePages = {
  overview: EmployeeOverview,
  reservations: Reservations,
  "kitchen-queue": EmployeeKitchenQueue,
  tables: EmployeeTables,
  schedule: EmployeeSchedule,
  profile: EmployeeProfile,
};

const DashboardSection = ({ pages, fallbackPath }) => {
  const { section = "overview" } = useParams();
  const Page = pages[section];
  return Page ? <Page /> : <Navigate to={fallbackPath} replace />;
};

const UserDashboardSection = () => (
  <DashboardSection pages={userPages} fallbackPath="/dashboard/user/overview" />
);

const AdminDashboardSection = () => (
  <DashboardSection pages={adminPages} fallbackPath="/dashboard/admin/overview" />
);

const EmployeeDashboardSection = () => (
  <DashboardSection pages={employeePages} fallbackPath="/dashboard/employee/overview" />
);

// Dynamic redirect depending on current role
const DashboardRedirect = () => {
  if (role === "superadmin") {
    return <Navigate to="superadmin" replace />;
  }

  if (role === "admin") {
    return <Navigate to="admin/overview" replace />;
  }

  if (role === "employee") {
    return <Navigate to="employee/overview" replace />;
  }

  return <Navigate to="user/overview" replace />;
};
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
      { index: true, element: <DashboardRedirect /> },
      { path: "user/:section?", element: <UserDashboardSection /> },
      { path: "admin/:section?", element: <AdminDashboardSection /> },
      { path: "admin/employees/:section?", element: <AdminEmployees /> },
      { path: "employee/:section?", element: <EmployeeDashboardSection /> },
      { path: "superadmin/:section?", element: <SuperadminControlCenter /> },
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