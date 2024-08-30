// Dependencies
import { Navigate, useNavigate } from "react-router-dom";

// Context
import useAuthContext from "./hooks/useAuthContext";
import { useEffect } from "react";

// Components

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      return navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);
  return children;
};

export default ProtectedRoute;
