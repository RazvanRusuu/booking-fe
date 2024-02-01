import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Layout>
          <Outlet />
        </Layout>
      }
      errorElement={<div>ErrorElement</div>}
    >
      <Route index path="/" element={<>Home</>} />
      <Route index path="/search" element={<>Search</>} />

      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<>sign-in</>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
