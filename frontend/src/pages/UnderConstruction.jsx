import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center flex-col text-gray-600">
      <h1 className="text-4xl font-bold font-sans mb-6">
        WEBPAGE UNDERCONSTRUCTION
      </h1>
      <p>
        This webpage feature is currently under construction. Stay tune for the
        update.
      </p>
      <Button onClick={()=> navigate (-1)} className={"underline"}>
        Go back
      </Button>
    </main>
  );
};

export default UnderConstruction;
