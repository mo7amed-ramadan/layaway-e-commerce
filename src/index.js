import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./db/Data.json";
import Home from "./layout/Home/home";
import Page404 from "./layout/page-not-found/page404";
import ProductPage from "./layout/product-page/productPage";
import Cart from "./layout/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const productList = data[0];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Page404 />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage productData={productList} />,
    errorElement: <Page404 />,
  },
]);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
