import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import OrderConfirmation from "./components/confirmation/OrderConfirmation";
import OrderConfirmed from "./components/confirmation/OrderConfirmed";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout/confirm",
        element: <OrderConfirmation />,
      },
      {
        path: "/checkout/confirmed",
        element: <OrderConfirmed />,
      },
    ],
  },
]);

export default router;
