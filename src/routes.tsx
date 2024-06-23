import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { Home } from "./pages/home";
import { Products } from "./pages/products";

import { ErrorPage } from "./pages/errorPage";
import { ProductsDetails } from "./pages/productsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    /*A propriedade Outlet dentro do element pai, faz com que os filhos funcionem */
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductsDetails /> },
    ],
  },
]);
