import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center flex-col text-gray-600 text-center">
      <h1 className="text-4xl font-bold font-sans mb-6 max-[500px]:text-3xl max-[400px]:text-2xl">
        WEBPAGE UNDERCONSTRUCTION
      </h1>
      <p>
        This webpage feature is currently under construction. Stay tune for the
        update.
      </p>
      <Button onClick={()=> navigate (-1)} className={"underline mt-4"}>
        Go back
      </Button>
    </main>
  );
};

export default UnderConstruction;
