import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { scroll } from "./animation";
import { Home, NotFound } from "./pages";
import { Footer, Navbar } from "./components/global";
import Studio from "./pages/studio";
import About from "./pages/About";

const Root = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
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
      {
        path: "/studio",
        element: <Studio />,
      },
      {
        path: "/about",
        element: <About />,
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
