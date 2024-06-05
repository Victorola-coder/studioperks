import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // useLocation,
} from "react-router-dom";
import { Home, NotFound } from "./pages";
import { scroll } from "./animation";
import { useEffect } from "react";

const Root = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ScrollRestoration />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    scroll();
  }, []);
  return <RouterProvider router={router} />;
}
