import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramsList = () => {
  return (
    <ul className="grid grid-cols-5 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[470px]:grid-cols-1">
      <ProgramCard />
    </ul>
  );
};

export default ProgramsList;
