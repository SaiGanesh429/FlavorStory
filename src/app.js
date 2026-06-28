import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <ErrorPage />,
      },
      {
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
