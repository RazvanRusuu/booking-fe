import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import { router } from "./router/Router";
import { AppContextProvider } from "./context/AppContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
