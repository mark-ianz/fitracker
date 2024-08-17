import { createContext, useReducer } from "react";

const ExercisesFormContext = createContext();

const ExerciseFormReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDING_EXERCISE": {
      return {
        ...state,
        isAddingExercise: action.payload,
        fromSplit: false,
      };
    }
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isAddingExercise: false,
        fromSplit: false,
      };
    case "ADD_EXERCISES_FROM_SPLIT":
      return {
        ...state,
        ...action.payload,
        fromSplit: true,
      };
    case "SET_EDITING":
      return {
        ...state,
        editing: { ...action.payload },
        isEditing: true,
        fromSplit: false,
      };
    case "DISCARD_EDITING":
      return {
        ...state,
        isEditing: false,
        editing: null,
        fromSplit: false,
      };
    case "SAVE_EDIT":
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          return exercise.id === action.payload.id ? action.payload : exercise;
        }),
        isAddingExercise: false,
        isEditing: false,
        editing: null,
        fromSplit: false,
      };
    default:
      return state;
  }
};

const ExercisesFormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExerciseFormReducer, {
    fromSplit: false,
    programName: "",
    programDescription: "",
    exercises: [],
    isAddingExercise: false,
    isEditing: false,
    editing: null, // Editing object value
  });

  return (
    <ExercisesFormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExercisesFormContext.Provider>
  );
};

export { ExercisesFormContext, ExercisesFormContextProvider };
