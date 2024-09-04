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
    let validationError = [];

    if (!sessionName) {
      validationError.push("Session name is required");
    }
    if (exercises.length === 0) {
      validationError.push("Add at least one exercise");
    }

    if (!dateTime) {
      validationError.push("Date and time are required");
    }

    for (const exercise of exercises) {
      if (!exercise.exerciseName) {
        validationError.push("Exercise name is required");
      }
      if (exercise.sets.length === 0) {
        validationError.push("Add at least one set in your exercise");
      }
    }

    setError(validationError);

    return validationError.length === 0;
  };

  return validateCreateSession;
};

export default useCreateSessionValidator;
