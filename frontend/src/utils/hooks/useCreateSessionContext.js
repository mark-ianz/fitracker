import { useContext } from "react";
import { CreateSessionContext } from "../context/CreateSessionContext";

const useCreateSessionContext = () => {
  const context = useContext(CreateSessionContext);

  if (!context) throw Error("Not inside the provider");
  return context;
};

export default useCreateSessionContext;
