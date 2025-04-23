import React, { lazy, Suspense, useState } from "react";
// import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Help from "./components/Help";
import Search from "./components/Search";
import CheckoutPage from "./components/CheckoutPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

//chunking
// code splitting
//dynamic bundling
//lazy loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Madhav Chaturvedi",
    email: "madhavchaturvedi0562@gmail.com",
  });

  return (
    <Provider store={store}>
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurentmenu/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default AppRouter;
