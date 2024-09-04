import { createContext, useReducer } from "react";
import { generateEmptyExercise, generateEmptySet, getDateNow } from "../helper";

const CreateSessionContext = createContext();

const initialState = {
  sessionName: "",
  description: "",
  tags: "Workout",
  location: "Gym",
  dateTime: getDateNow(),
  exercises: [],
  error: null,
};

const createSessionReducer = (state, action) => {
  switch (action.type) {
    // Session
    case "SET_SESSION_NAME":
      return {
        ...state,
        sessionName: action.payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "SET_TAGS":
      return {
        ...state,
        tags: action.payload,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "SET_DATE_TIME":
      return {
        ...state,
        dateTime: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    case "RESET_FORM":
      return initialState;

    // Exercises
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
        error: null,
      };
    default:
      return state;
  }
};

const CreateSessionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(createSessionReducer, initialState);

  return (
    <CreateSessionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreateSessionContext.Provider>
  );
};

export { CreateSessionContextProvider, CreateSessionContext };
