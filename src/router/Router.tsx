import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Register from "../pages/Register";

export const router = createBrowserRouter(
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
