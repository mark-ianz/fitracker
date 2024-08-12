// Dependencies
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Context
import useAuthContext from "./hooks/useAuthContext";
import useModalContext from "./hooks/useModalContext";

// Components
import LoginForm from "../components/Forms/LoginForm";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { openModal } = useModalContext();

  useEffect(() => {
    if (!isAuth) {
      openModal(<LoginForm />);
      navigate("/");
    }
  }, [isAuth, openModal, navigate]);

  if (!isAuth) return null;

  return children;
};

export default ProtectedRoute;
