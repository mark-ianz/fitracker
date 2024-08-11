import { useContext } from "react"
import { ExercisesFormContext } from "../context/ExercisesFormContext"

const useExercisesFormContext = () => {
  const context =  useContext (ExercisesFormContext);

  if (!context) {
    throw new Error('useExercisesFormContext must be used within an ExercisesFormContextProvider');
  }

  return context
}

export default useExercisesFormContext