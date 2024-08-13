import { createContext, useReducer } from "react";

const ExercisesFormContext = createContext();

const ExerciseFormReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDING_EXERCISE": {
      return {
        ...state,
        isAddingExercise: action.payload,
      };
    }
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isAddingExercise: false,
      };
    case "SET_EDITING":
      return {
        ...state,
        editing: { ...action.payload },
        isEditing: true,
      };
    case "DISCARD_EDITING":
      return {
        ...state,
        isEditing: false,
        editing: null,
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
      };
    default:
      return state;
  }
};

const ExercisesFormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExerciseFormReducer, {
    exercises: [],
    isAddingExercise: false,
    isEditing: false,
    editing: null, // Editing object value
  });

  console.log(state);

  return (
    <ExercisesFormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExercisesFormContext.Provider>
  );
};

export { ExercisesFormContext, ExercisesFormContextProvider };
