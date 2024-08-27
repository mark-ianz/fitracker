import { createContext, useReducer } from "react";
import { v4 as generate_uuid } from "uuid";

export const CreateSplitContext = createContext();

const initialState = {
  title: "a",
  description: "",
  programs: [],
};

const generateEmptyProgram = () => ({
  _id: generate_uuid(),
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
  id: generate_uuid(),
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
  console.log(state);
  return (
    <CreateSplitContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreateSplitContext.Provider>
  );
};

/* [
  {
    id: 1,
    programName: "Push Day",
    muscleTargets: "Chest, Shoulders, Triceps",
    programDescription:
      "Focuses on pushing movements to develop the chest, shoulders, and triceps with a mix of compound and isolation exercises.",
    exercises: [
      { exerciseName: "Bench Press", id: 2323 },
      { exerciseName: "Incline Dumbbell Press", id: 512 },
      { exerciseName: "Overhead Press", id: 6121 },
      { exerciseName: "Lateral Raise", id: 12512 },
      { exerciseName: "Tricep Dips", id: 555 },
      { exerciseName: "Tricep Pushdown", id: 111 },
    ],
  },
], */
