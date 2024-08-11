import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext";

const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "CLEAR_WORKOUTS" });
    navigate ("/")
  };

  return logout;
};

export default useLogout;
