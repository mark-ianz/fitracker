import { useContext } from "react";
import { CreateSplitContext } from "../context/CreateSplitContext";

const useCreateSplitContext = () => {
  return useContext(CreateSplitContext);
};

export default useCreateSplitContext;
