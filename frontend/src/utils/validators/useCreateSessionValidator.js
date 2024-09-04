import { getTotalVolume } from "../helper";
import useCreateSessionContext from "../hooks/useCreateSessionContext";

const useCreateSessionValidator = () => {
  const { sessionName, dateTime, exercises, dispatch } =
    useCreateSessionContext();

  const setError = (error) => {
    dispatch({
      type: "SET_ERROR",
      payload: { error },
    });
  };

  const validateCreateSession = () => {
    let validationError = new Set();
    let i = 0;

    if (!sessionName) {
      validationError.add("Session name is required");
    }
    if (exercises.length === 0) {
      validationError.add("Add at least one exercise");
    }

    if (!dateTime) {
      validationError.add("Date and time are required");
    }

    while (i < exercises.length) {
      const total = getTotalVolume(exercises[i]);

      if (!total.reps || !total.weight) {
        validationError.add("Exercise reps and weight cannot be 0");
      }

      if (!exercises[i].exerciseName) {
        validationError.add("Exercise name is required for Exercise #" + (i + 1));
      }
      if (exercises[i].sets.length === 0) {
        validationError.add("Add at least one set in your exercise");
      }
      i++;
    }

    setError(Array.from(validationError));

    return Array.from(validationError).length === 0;
  };

  return validateCreateSession;
};

export default useCreateSessionValidator;
