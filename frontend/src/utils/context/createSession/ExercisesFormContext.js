import { createContext, useReducer } from "react";
import { generateEmptyExercise, generateEmptySet } from "../../helper";

const ExercisesFormContext = createContext();

const initialState = {
  programName: "",
  programDescription: "",
  exercises: [],
};

const ExerciseFormReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPTY_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, generateEmptyExercise()],
      };
    case "SET_EXERCISE_NAME":
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === action.payload.exerciseId
            ? { ...exercise, exerciseName: action.payload.input }
            : exercise
        ),
      };
    case "SET_EXERCISE_REPS":
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === action.payload.exerciseId
            ? {
                ...exercise,
                sets: exercise.sets.map((set, index) =>
                  index === action.payload.index
                    ? { ...set, reps: action.payload.input }
                    : set
                ),
              }
            : exercise
        ),
      };
    case "SET_EXERCISE_WEIGHT":
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === action.payload.exerciseId
            ? {
                ...exercise,
                sets: exercise.sets.map((set, index) =>
                  index === action.payload.index
                    ? { ...set, weight: action.payload.input }
                    : set
                ),
              }
            : exercise
        ),
      };
    case "ADD_SET":
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === action.payload.exerciseId
            ? {
                ...exercise,
                sets: [
                  ...exercise.sets,
                  exercise.sets.length > 0
                    ? { ...exercise.sets[exercise.sets.length - 1] }
                    : generateEmptySet(),
                ],
              }
            : exercise
        ),
      };
    case "DELETE_SET":
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === action.payload.exerciseId
            ? {
                ...exercise,
                sets: exercise.sets.filter(
                  (set, index) => index !== action.payload.index
                ),
              }
            : exercise
        ),
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload.exerciseId
        ),
      };
    case "ADD_EXERCISES_FROM_SPLIT":
      return {
        ...state,
        ...action.payload,
        fromSplit: true,
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const ExercisesFormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExerciseFormReducer, initialState);

  return (
    <ExercisesFormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExercisesFormContext.Provider>
  );
};

export { ExercisesFormContext, ExercisesFormContextProvider };
