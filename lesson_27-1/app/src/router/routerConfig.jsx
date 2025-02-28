import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";
import { About } from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
