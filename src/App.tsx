import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Acting from "./pages/Acting";
import Motion from "./pages/Motion";
import "./i18n";
import Policy from "./pages/Policy";
import LegalNotices from "./pages/LegalNotices";
import Locations from "./pages/Locations";

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
    path: "/motion",
    element: <Motion />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/legal-notices",
    element: <LegalNotices />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
