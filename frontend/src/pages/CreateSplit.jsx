import React, { useState } from "react";
import BackButton from "../components/BackButton";
import LineSeperator from "../components/LineSeperator";
import AddMoreButton from "../components/WorkoutsFeed/Create/AddMoreButton";

const CreateSplit = () => {
  const [programs, setPrograms] = useState(null);
  const [isAddingProgram, setIsAddingProgram] = useState(false);

  return (
    <main>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Create Split</h1>
      </div>
      <LineSeperator className={"my-4"} />
      <form>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="text-input"
            placeholder='(e.g, "PPL", "Bro Split", "Upper Lower")'
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="text-input"
            placeholder="(Optional)"
          />
        </div>
        <div className="flex flex-col">
          <p>Programs</p>
          {!isAddingProgram && <AddMoreButton className={"py-6"}>Add Programs</AddMoreButton>}
        </div>
      </form>
    </main>
  );
};

export default CreateSplit;

/* {
  "title": "PPL x Arnold Split",
  "description": "A hybrid of the Push/Pull/Legs split and Arnold Schwarzenegger's high-volume training principles. This split focuses on comprehensive muscle development with high volume and intensity.",
  "programs": [
    {
        "programName": "Push Day",
        "muscleTargets": "Chest, Shoulders, Triceps",
        "programDescription": "Focuses on pushing movements to develop the chest, shoulders, and triceps with a mix of compound and isolation exercises.",
        "exercises": [
            {
                "exerciseName": "Bench Press"
            },
            {
                "exerciseName": "Incline Dumbbell Press"
            },
            {
                "exerciseName": "Overhead Press"
            },
            {
                "exerciseName": "Lateral Raise"
            },
            {
                "exerciseName": "Tricep Dips"
            },
            {
                "exerciseName": "Tricep Pushdown"
            }
        ]
    },
  ]
} */
