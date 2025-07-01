import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <CartPage />
  }
]);

export default router;
