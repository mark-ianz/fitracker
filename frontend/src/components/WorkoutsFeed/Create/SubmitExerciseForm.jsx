import React, { useEffect, useState } from "react";
import useExercisesFormContext from "../../../utils/hooks/useExercisesFormContext";
import Button from "../../Buttons/Button";
import { v4 } from "uuid";

const SubmitExerciseForm = ({ exerciseId }) => {
  const { dispatch, exercises } = useExercisesFormContext();

  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState([]);
  const [canSave, setCanSave] = useState(false);

  useEffect(() => {
    const exercise = exercises.find((exercise) => {
      return exercise.id === exerciseId;
    });

    if (exercise) {
      setExerciseName(exercise.exerciseName);
      setSets(exercise.sets);
    }
  }, [exercises, exerciseId]);

  // Check if can Save
  useEffect(() => {
    if (!exerciseName) {
      setCanSave(false);
      return;
    }
    if (sets.length <= 0) {
      setCanSave(false);
    } else {
      setCanSave(sets.every(({ reps, weight }) => reps && weight));
    }
  }, [sets, exerciseName]);

  const handleWeightChange = (e) => {
    // Parse the reps since the input value turns into string
    const weight = parseFloat(e.target.value);

    // Get the data index from the target
    const index = parseInt(e.target.getAttribute("data-index"));

    // Map the sets
    setSets((prevSets) => {
      return prevSets.map((prevSet, i) => {
        return index === i ? { ...prevSet, weight } : prevSet;
      });
    });
  };

  const handleDeleteSet = (index) => {
    setSets((prevSets) => {
      return prevSets.filter((prevSet, i) => {
        return index !== i;
      });
    });
  };

  const handleExercisePerformedSubmit = (e) => {
    e.preventDefault();
    // Generate UUID
    // exerciseId is only true if on editing mode.
    if (!exerciseId) {
      const id = v4();
      dispatch({ type: "ADD_EXERCISE", payload: { exerciseName, sets, id } });
    } else {
      dispatch({
        type: "SAVE_EDIT",
        payload: { exerciseName, sets, id: exerciseId },
      });
    }

    // Reset to default
    setExerciseName("");
    setSets([]);
  };

  const addSet = () => {
    setSets((s) => {
      // Check if there's a set before this
      // If there is, set the current state as the default value for new set.
      return s.length > 0
        ? [...s, s[s.length - 1]]
        : [...s, { reps: null, weight: null }];
    });
  };

  const handleRepsChange = (e) => {
    // Parse the reps since the input value turns into string
    const reps = parseInt(e.target.value);

    // Get the data index from the target
    const index = parseInt(e.target.getAttribute("data-index"));

    // Map the sets
    setSets((prevSets) => {
      return prevSets.map((prevSet, i) => {
        return index === i ? { ...prevSet, reps } : prevSet;
      });
    });
  };

  return (
    <form
      onSubmit={handleExercisePerformedSubmit}
      className="p-4 border-solid border-2 rounded-md outline-[#9d9d9d] flex flex-col align-center"
    >
      <div className="input-wrapper flex flex-col">
        <label htmlFor="exerciseName">Exercise Name</label>
        <input
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          type="text"
          name="exerciseName"
          id="exerciseName"
          className="py-1 px-2 border-solid border-[1px] rounded-md outline-[#9d9d9d]"
        />
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-center">Set</th>
            <th className="text-center">Reps</th>
            <th className="text-center">Weight (lb)</th>
          </tr>
        </thead>
        <tbody>
          {sets.map((set, index) => {
            return (
              <tr key={index}>
                <td className="text-center w-1/3">{index + 1}</td>
                <td className="text-center w-1/3">
                  <input
                    value={set.reps ? set.reps : ""}
                    onChange={handleRepsChange}
                    type="number"
                    name="reps"
                    data-index={index}
                    className="p-1 rounded-md outline-[#9d9d9d] w-1/2 border-solid border-[1px] text-center"
                  />
                </td>
                <td className="text-center w-1/3">
                  <input
                    value={set.weight ? set.weight : ""}
                    onChange={handleWeightChange}
                    type="number"
                    name="weight"
                    data-index={index}
                    className="p-1 rounded-md outline-[#9d9d9d] w-2/3 border-solid border-[1px] text-center"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleDeleteSet(index)}>
                    <svg
                      viewBox="0 0 24 24"
                      width="36px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z"
                          stroke="#f87171"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        className="text-center text-red-400 mt-7"
        onClick={addSet}
      >
        Add Set
      </button>
      <div className="justify-end flex gap-4 mt-12">
        <Button
          buttonType="secondary"
          onClick={() => {
            dispatch({ type: "SET_ADDING_EXERCISE", payload: false });
            dispatch({ type: "DISCARD_EDITING" });
          }}
        >
          Cancel
        </Button>
        <Button buttonType="primary" toSubmit={true} isDisabled={!canSave}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default SubmitExerciseForm;
