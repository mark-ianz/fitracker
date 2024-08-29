// Dependencies
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Context
import useAuthContext from "./hooks/useAuthContext";
import useModalContext from "./hooks/useModalContext";

// Components
import LoginForm from "../components/Forms/LoginForm";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuthContext();
  /* const navigate = useNavigate();
  const { openModal } = useModalContext();

  useEffect(() => {
    if (!isAuth) {
      openModal(<LoginForm />);
      navigate("/");
    }
  }, [isAuth, openModal]);

  if (!isAuth) return null;

  return <Outlet />; */
  return isAuth ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
