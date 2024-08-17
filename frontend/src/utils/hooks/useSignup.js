import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useModalContext from "./useModalContext";
import usersAPI from "../api/users";

const useSignup = () => {
  const { dispatch } = useAuthContext();
  const { closeModal } = useModalContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const signup = async ({ username, email, password, confirmPassword }) => {
    try {
      // Set loading to true and clear errors
      setLoading(true);
      setError("");
      const { data: user } = await usersAPI.post(
        "/signup",
        {
          username,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(user);

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
  return { signup, error, loading };
};

export default useSignup;
