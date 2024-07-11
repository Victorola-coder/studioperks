import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { scroll } from "./animation";
import {
  Home,
  NotFound,
  About,
  AerialPhoto,
  Cameras,
  DescCamera,
  Studio,
  VideoProduction,
  Contact,
} from "./pages";
import { Footer, Navbar } from "./components/global";

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
      {
        path: "/camera",
        element: <Cameras />,
      },
      {
        path: "/camera/:id",
        element: <DescCamera />,
      },
      {
        path: "/AerialPhotography",
        element: <AerialPhoto />,
      },
      {
        path: "/videoProduction",
        element: <VideoProduction />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
