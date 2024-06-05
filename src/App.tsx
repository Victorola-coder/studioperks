import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // useLocation,
} from "react-router-dom";
import { Home } from "./pages";

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
        // element: <$404 />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
