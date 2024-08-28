// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// Pages
import Layout from "./Layout";
import History from "./pages/History";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ViewWorkout from "./pages/ViewWorkout";
import RecommendedSplits from "./pages/RecommendedSplits";
import Features from "./pages/Features";
import Splits from "./pages/Splits";

// Provider
import Providers from "./utils/context/Providers";
import ProtectedRoute from "./utils/ProtectedRoute";
import CreateWorkout from "./pages/CreateWorkout";
import NotForAuth from "./utils/NotForAuth";
import ViewSplit from "./pages/ViewSplit";
import Test from "./pages/Test";
import CustomSplits from "./pages/CustomSplits";
import UnderConstruction from "./pages/UnderConstruction";
import CreateSplit from "./pages/CreateSplit";
import "react-loading-skeleton/dist/skeleton.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "history",
        element: (
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        ),
      },
      {
        path: "workout/:workout_id",
        element: <ViewWorkout />,
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
        path: "splits",
        element: <Splits />,
      },
      {
        path: "splits/recommended",
        element: <RecommendedSplits />,
      },
      {
        path: "splits/custom",
        element: (
          <ProtectedRoute>
            <CustomSplits />
          </ProtectedRoute>
        ),
      },
      {
        path: "splits/create",
        element: <CreateSplit />,
      },
      {
        path: "splits/:id",
        element: <ViewSplit />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
