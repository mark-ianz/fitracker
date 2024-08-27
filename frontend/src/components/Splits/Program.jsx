import { useState } from "react";
import AddMoreButton from "../WorkoutsFeed/Create/AddMoreButton";
import Exercises from "./Exercises";
import useCreateSplitContext from "../../utils/hooks/useCreateSplitContext";

const Program = () => {
  const { programs, dispatch } = useCreateSplitContext();
  const [isAddingProgram, setIsAddingProgram] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">Programs</p>
      {programs.length > 0 && (
        <ul className="flex flex-col gap-10">
          {programs.map((program) => (
            <li
              key={program._id}
              className="p-4 rounded-md flex flex-col gap-4 bg-gray-50 border-sold border-gray-200 border"
            >
              <div className="flex flex-col">
                <label htmlFor="programName">Program Name</label>
                <input
                  type="text"
                  name="programName"
                  className="text-input"
                  value={program.programName}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_PROGRAM_NAME",
                      payload: {
                        programId: program._id,
                        input: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="muscleTargets">Muscle Targets</label>
                <input
                  type="text"
                  name="muscleTargets"
                  className="text-input"
                  placeholder="(Optional)"
                  value={program.muscleTargets}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_MUSCLE_TARGETS",
                      payload: {
                        programId: program._id,
                        input: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="programDescription">Program Description</label>
                <textarea
                  name="programDescription"
                  rows="4"
                  className="text-input"
                  placeholder="(Optional)"
                  value={program.programDescription}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_PROGRAM_DESCRIPTION",
                      payload: {
                        programId: program._id,
                        input: e.target.value,
                      },
                    })
                  }
                ></textarea>
              </div>
              <Exercises
                exercises={program.exercises}
                programId={program._id}
              />
            </li>
          ))}
        </ul>
      )}
      <AddMoreButton
        className={"py-6"}
        onClick={() => dispatch({ type: "ADD_EMPTY_PROGRAM" })}
      >
        Add Programs
      </AddMoreButton>
    </div>
  );
};

export default Program;
