import { createContext, useReducer } from "react";
import { ObjectId } from "bson";

export const CreateSplitContext = createContext();

const initialState = {
  title: "",
  description: "",
  programs: [],
};

const generateEmptyProgram = () => ({
  _id: new ObjectId().toHexString(),
  programName: "",
  muscleTargets: "",
  programDescription: "",
  exercises: [
    generateEmptyExercise(),
    generateEmptyExercise(),
    generateEmptyExercise(),
  ],
});

const generateEmptyExercise = () => ({
  exerciseName: "",
  id: new ObjectId().toHexString(),
});

const createSplitReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "ADD_EMPTY_PROGRAM":
      return {
        ...state,
        programs: [...state.programs, generateEmptyProgram()],
      };
    case "DELETE_PROGRAM":
      return {
        ...state,
        programs: state.programs.filter(
          (program) => program._id !== action.payload
        ),
      };
    case "UPDATE_PROGRAM_NAME":
      return {
        ...state,
        programs: state.programs.map((program) =>
          program._id === action.payload.programId
            ? { ...program, programName: action.payload.input }
            : program
        ),
      };
    case "UPDATE_MUSCLE_TARGETS":
      return {
        ...state,
        programs: state.programs.map((program) =>
          program._id === action.payload.programId
            ? { ...program, muscleTargets: action.payload.input }
            : program
        ),
      };
    case "UPDATE_PROGRAM_DESCRIPTION":
      return {
        ...state,
        programs: state.programs.map((program) =>
          program._id === action.payload.programId
            ? { ...program, programDescription: action.payload.input }
            : program
        ),
      };
    case "ADD_EMPTY_EXERCISE":
      return {
        ...state,
        programs: state.programs.map((program) =>
          program._id === action.payload
            ? {
                ...program,
                exercises: [...program.exercises, generateEmptyExercise()],
              }
            : program
        ),
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        programs: state.programs.map((program) =>
          program._id === action.payload.programId
            ? {
                ...program,
                exercises: program.exercises.filter(
                  (exercise) => exercise.id !== action.payload.exerciseId
                ),
              }
            : program
        ),
      };
    case "UPDATE_EXERCISE_NAME":
      return {
        ...state,
        programs: state.programs.map((program) =>
          program._id === action.payload.programId
            ? {
                ...program,
                exercises: program.exercises.map((exercise) =>
                  exercise.id === action.payload.exerciseId
                    ? { ...exercise, exerciseName: action.payload.input }
                    : exercise
                ),
              }
            : program
        ),
      };
    default:
      return state;
  }
};

export const CreateSplitContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(createSplitReducer, initialState);
  return (
    <CreateSplitContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreateSplitContext.Provider>
  );
};
