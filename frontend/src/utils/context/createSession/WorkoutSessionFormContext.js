import { createContext, useReducer } from "react";
import { getDateNow } from "../../helper";

export const WorkoutSessionFormContext = createContext();
export const WorkoutSessionFormProvider = ({ children }) => {
  const initialState = {
    sessionName: "",
    description: "",
    tags: "Workout",
    location: "Gym",
    dateTime: getDateNow(),
  };

  const workoutSessionFormReducer = (state, action) => {
    switch (action.type) {
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
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(workoutSessionFormReducer, initialState);

  return (
    <WorkoutSessionFormContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutSessionFormContext.Provider>
  );
};
