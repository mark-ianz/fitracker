import { useContext } from "react";
import { WorkoutSessionFormContext } from "../../context/createSession/WorkoutSessionFormContext";

export default function useWorkoutSessionFormContext() {
  const context = useContext(WorkoutSessionFormContext)
  if (!context) {
    throw new Error('useWorkoutSessionFormContext must be used within an ExercisesFormContextProvider');
  }

  return context
}
