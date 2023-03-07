import "./layout.css";
import "./components/confirmation/orderconfirmation.css";
import "./components/navbar/navbar.css";
import "./components/checkout/checkout.css";
import "./components/product/product.css";
import "./components/select/select.css";
import "./components/cart/cart.css";
import "@fontsource/lato";
import "@fontsource/lato/300.css";
import "@fontsource/lato/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
