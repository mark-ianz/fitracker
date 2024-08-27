import { useState } from "react";
import Button from "../Button";
import Trash from "../Icons/Trash";
import useCreateSplitContext from "../../utils/hooks/useCreateSplitContext";

const Exercises = ({ exercises, programId }) => {
  const { dispatch } = useCreateSplitContext();
  return (
    <div className="flex flex-col">
      <label htmlFor="exercise-input" className="font-bold text-xl mb-1">
        Exercises:
      </label>
      {exercises && (
        <ul className="flex flex-col gap-4">
          {exercises.map((exercise) => (
            <li className="flex flex-col w-full" key={exercise.id}>
              <label htmlFor="exerciseName">Exercise Name</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="exerciseName"
                  className="text-input w-full "
                  value={exercise.exerciseName}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_EXERCISE_NAME",
                      payload: {
                        programId,
                        exerciseId: exercise.id,
                        input: e.target.value,
                      },
                    })
                  }
                />
                <Trash width={"2em"} onClick={() => console.log("a")} />
              </div>
            </li>
          ))}
          <div className="flex flex-col gap-2">
            <Button
              buttonType={"primary"}
              onClick={() =>
                dispatch({ type: "ADD_EMPTY_EXERCISE", payload: programId })
              }
            >
              Add Exercises
            </Button>
            <Button
              buttonType={"secondary"}
              onClick={() =>
                dispatch({ type: "DELETE_PROGRAM", payload: programId })
              }
            >
              Delete Program
            </Button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Exercises;
