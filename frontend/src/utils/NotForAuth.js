import { useNavigate } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";
import { useEffect } from "react";

const NotForAuth = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  if (isAuth) return null;

  return children;
};

export default NotForAuth;
