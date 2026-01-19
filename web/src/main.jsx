import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/login.jsx";
import CreateAccount from "./pages/create-account.jsx";
import AboutUs from "./pages/about-us.jsx";
import ForgotPassword from "./pages/forgot-password.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  }
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
