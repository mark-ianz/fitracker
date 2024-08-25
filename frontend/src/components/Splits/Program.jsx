import { useState } from "react";
import AddMoreButton from "../WorkoutsFeed/Create/AddMoreButton";
import Exercises from "./Exercises";

const Program = () => {
  const [programs, setPrograms] = useState(null);
  const [isAddingProgram, setIsAddingProgram] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">Programs</p>
      {isAddingProgram && (
        <AddMoreButton className={"py-6"}>Add Programs</AddMoreButton>
      )}
      <div
        className="p-4 rounded-md flex flex-col gap-4 bg-gray-50
        border-sold border-gray-200 border"
      >
        <div className="flex flex-col">
          <label htmlFor="programName">Program Name</label>
          <input type="text" name="programName" className="text-input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="muscleTargets">Muscle Targets</label>
          <input type="text" name="muscleTargets" className="text-input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="programDescription">Program Description</label>
          <textarea
            name="programDescription"
            rows="4"
            className="text-input"
          ></textarea>
        </div>
        <Exercises />
      </div>
      <AddMoreButton className={"py-6"}>Add Programs</AddMoreButton>
    </div>
  );
};

export default Program;
