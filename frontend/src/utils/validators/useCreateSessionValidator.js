import { useEffect, useState } from "react";
import useCreateSessionContext from "../hooks/useCreateSessionContext";

const useCreateSessionValidator = () => {
  const { sessionName, description, tags, dateTime, exercises, dispatch } =
    useCreateSessionContext();

  const isValid = () => {
    if (!sessionName) {
      dispatch({
        type: "SET_ERROR",
        payload: { error: "Session Name is Required" },
      });

      return false;
    }

    return true;
  };

  return isValid;
};

export default useCreateSessionValidator;
