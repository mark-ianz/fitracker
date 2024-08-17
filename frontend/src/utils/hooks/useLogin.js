import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useModalContext from "./useModalContext";
import usersAPI from "../api/users";

const useLogin = () => {
  const { dispatch } = useAuthContext();
  const { closeModal } = useModalContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const login = async ({ email, password }) => {
    try {
      // Set loading to true and clear errors
      setLoading(true);
      setError("");
      const { data: user } = await usersAPI.post(
        "/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Set user data in the context and localStorage
      dispatch({ type: "LOGIN", payload: user });
      localStorage.setItem("user", JSON.stringify(user));
      closeModal();
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { login, error, loading };
};

export default useLogin;
