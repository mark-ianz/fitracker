import { useContext } from "react";
import { CreateSplitContext } from "../context/CreateSplitContext";

const useCreateSplitContext = () => {
  const context = useContext(CreateSplitContext);

  if (!context) throw Error ("Not inside the provider");
  return context;
};

export default useCreateSplitContext;
