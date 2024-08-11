import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};

export default useWorkoutContext;