import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useSignup = () => {
  const { dispatch } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const signup = async ({ username, email, password, confirmPassword }) => {
    try {
      // Set loading to true and clear errors
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
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
  return { signup, error, loading };
};

export default useSignup;
