// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// Pages
import Layout from "./Layout";
import History from "./pages/History";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import ViewWorkout from "./pages/ViewWorkout";
import RecommendedSplits from "./pages/RecommendedSplits";
import Splits from "./pages/Splits";

// Provider
import Providers from "./utils/context/Providers";
import ProtectedRoute from "./utils/ProtectedRoute";
import CreateWorkout from "./pages/CreateWorkout";
import ViewSplit from "./pages/ViewSplit";
import Test from "./pages/Test";
import CustomSplits from "./pages/CustomSplits";
import CreateSplit from "./pages/CreateSplit";
import "react-loading-skeleton/dist/skeleton.css";
import WorkoutSessionForm from "./components/WorkoutsFeed/Create/WorkoutSessionForm";

const router = createBrowserRouter([
  /* Landing Page */
  {
    path: "/",
    element: <LandingPage />,
  },
  /* Public Routes */
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "splits",
        element: <Splits />,
      },
      {
        path: "splits/recommended",
        element: <RecommendedSplits />,
      },
      {
        path: "splits/:id",
        element: <ViewSplit />,
      },
      {
        path: "splits/custom",
        element: <CustomSplits />,
      },
      {
        path: "fuck",
        element: <WorkoutSessionForm />,
      },
    ],
  },
  /* Private Routes */
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "history",
        element: <History />,
      },
      {
        path: "create",
        element: <CreateWorkout />,
      },
      {
        path: "workout/:workout_id",
        element: <ViewWorkout />,
      },
      {
        path: "splits/create",
        element: <CreateSplit />,
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
