// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// Pages
import Layout from "./Layout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ViewWorkout from "./pages/ViewWorkout";
import Programs from "./pages/Programs";
import Features from "./pages/Features";

// Provider
import Providers from "./utils/context/Providers";
import ProtectedRoute from "./utils/ProtectedRoute";
import useAuthContext from "./utils/hooks/useAuthContext";
import CreateWorkout from "./pages/CreateWorkout";

const Router = () => {
  const { isAuth } = useAuthContext();

  const router = createBrowserRouter([
    {
      // Landing Page
      path: "/",
      element: <Layout />, // Element to render
      errorElement: <ErrorPage />, // Error element
      children: [
        // If you want to render something inside the "element:"
        {
          path: "/", // Path where it will render
          element: !isAuth ? <LandingPage /> : <Home />,
        },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "create",
          element: (
            <ProtectedRoute>
              <CreateWorkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "programs",
          element: <Programs />,
        },
        {
          path: "features",
          element: <Features />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "workout/:workout_id",
          element: <ViewWorkout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>
);
