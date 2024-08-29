// Dependencies
import { Navigate, } from "react-router-dom";

// Context
import useAuthContext from "./hooks/useAuthContext";

// Components

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuthContext();
  return isAuth ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
