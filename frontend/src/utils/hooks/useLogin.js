import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const { dispatch } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const login = async ({ email, password }) => {
    try {
      // Set loading to true and clear errors
      setLoading(true);
      setError("");
      const response = await fetch("https://fitracker.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw Error(result.error);
      }

      // Set user data in the context and localStorage
      dispatch({ type: "LOGIN", payload: result });
      localStorage.setItem("user", JSON.stringify(result));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, error, loading };
};

export default useLogin;
