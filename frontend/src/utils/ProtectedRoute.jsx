// Dependencies
import { useNavigate } from "react-router-dom";

// Context
import useAuthContext from "./hooks/useAuthContext";
import { useEffect } from "react";
import useModalContext from "./hooks/useModalContext";

// Components
import LoginForm from "../components/Forms/LoginForm";
import LandingPage from "../pages/LandingPage";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { openModal } = useModalContext();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
      openModal(<LoginForm />);
    }
  }, [isAuth, openModal, navigate]);

  if (!isAuth) return <LandingPage />;

  return children;
};

export default ProtectedRoute;
