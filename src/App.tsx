import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/offices-by-cities",
  //   element: <OfficesByCities />,
  //   children: [
  //     {
  //       path: "/offices-by-cities/:region",
  //       element: <OfficesByCities />,
  //     },
  //   ],
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   path: "/action",
  //   element: <Action />,
  // },
  // {
  //   path: "/Motion",
  //   element: <Motion />,
  // },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
