import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Acting from "./pages/Acting";
import Motion from "./pages/Motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/acting",
    element: <Acting />,
  },
  {
    path: "/Motion",
    element: <Motion />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
