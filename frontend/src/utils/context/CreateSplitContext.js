import { createContext, useReducer } from "react";

export const CreateSplitContext = createContext();

const initialState = {
  title: "",
  description: "",
  programs: [
    {
      programName: "Push Day",
      muscleTargets: "Chest, Shoulders, Triceps",
      programDescription:
        "Focuses on pushing movements to develop the chest, shoulders, and triceps with a mix of compound and isolation exercises.",
      exercises: [
        { exerciseName: "Bench Press" },
        { exerciseName: "Incline Dumbbell Press" },
        { exerciseName: "Overhead Press" },
        { exerciseName: "Lateral Raise" },
        { exerciseName: "Tricep Dips" },
        { exerciseName: "Tricep Pushdown" },
      ],
    },
  ],
};

const createSplitReducer = () => {};

export const CreateSplitContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(createSplitReducer, initialState);

  return (
    <CreateSplitContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateSplitContext.Provider>
  );
};
