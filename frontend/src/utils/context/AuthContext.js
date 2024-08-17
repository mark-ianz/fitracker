import { createContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...action.payload,
      };
    case "LOGOUT":
      return {
        isAuth: false,
      };
    default:
      return null;
  }
};

const initialState = JSON.parse(localStorage.getItem("user")) || null;

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuth: false,
    ...initialState,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
