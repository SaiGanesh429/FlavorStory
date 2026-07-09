import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shimmer from "./components/Shimmer";
import DefaultContexts from "./utils/custom_contexts/default_contexts";
import { Provider } from "react-redux";
import appStore from "./utils/react-state-management/appStore";

//Lazy  Loading
const GroceryStore = lazy(() => import("./components/GroceryStore"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const RestaurantMenuList = lazy(() => import("./components/RestaurantMenuList"));




const AppLayout = () => {

  const [userName, setUserName] = useState("Default User");


  useEffect(() => {
    setUserName("App Component User");
  }, []);


  function handleUserNameChange(newUserName) {
   console.log("handleUserNameChange called with:", newUserName);
  }
  return (
    <div className="app">
      <Provider store={appStore}>
      <DefaultContexts.Provider value={{ theme: "light", loggedInUser: userName, setUserName, handleUserNameChange }}>
        <Header />
        <DefaultContexts.Provider value={{ theme: "light", loggedInUser: "Default" }}>
          <Outlet />
        </DefaultContexts.Provider>
      </DefaultContexts.Provider>
      </Provider>
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
        element: <Suspense fallback={<Shimmer></Shimmer>}><AboutUs /></Suspense>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Shimmer></Shimmer>}><ContactUs /></Suspense>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer></Shimmer>}><GroceryStore /></Suspense>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/restaurant/:resId",
        element: <Suspense fallback={<Shimmer></Shimmer>}><RestaurantMenuList /></Suspense>,
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
