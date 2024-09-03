import useCreateSessionContext from "../../../utils/hooks/useCreateSessionContext";
import Button from "../../Button";
import Trash from "../../Icons/Trash";

const SubmitExerciseForm = ({ exercise }) => {
  const { dispatch } = useCreateSessionContext();
  return (
    <li className="p-4 border-solid border-2 rounded-md outline-[#9d9d9d] flex flex-col align-center">
      <div className="input-wrapper flex flex-col">
        <label htmlFor="exerciseName">Exercise Name</label>
        <input
          value={exercise.exerciseName}
          onChange={(e) =>
            dispatch({
              type: "SET_EXERCISE_NAME",
              payload: {
                exerciseId: exercise.id,
                input: e.target.value,
              },
            })
          }
          type="text"
          name="exerciseName"
          id="exerciseName"
          className="py-1 px-2 border-solid border rounded-md outline-[#9d9d9d]"
        />
      </div>
      <table className="grow mt-4">
        <thead>
          <tr>
            <th className="w-1/3 text-center">Set</th>
            <th className="w-1/3 text-center">Reps</th>
            <th className="w-1/3 text-center">Weight (lb)</th>
          </tr>
        </thead>
        <tbody>
          {exercise.sets.map((set, index) => {
            return (
              <tr key={index} className="align-top">
                <td className="text-center w-1/3">{index + 1}</td>
                <td className="text-center w-1/3">
                  <input
                    value={set.reps}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_EXERCISE_REPS",
                        payload: {
                          exerciseId: exercise.id,
                          input: e.target.value,
                          index,
                        },
                      })
                    }
                    type="number"
                    name="reps"
                    className="p-1 rounded-md outline-[#9d9d9d] w-1/2 border-solid border text-center"
                  />
                </td>
                <td className="text-center w-1/3">
                  <input
                    value={set.weight}
                    type="number"
                    name="weight"
                    onChange={(e) =>
                      dispatch({
                        type: "SET_EXERCISE_WEIGHT",
                        payload: {
                          exerciseId: exercise.id,
                          input: e.target.value,
                          index,
                        },
                      })
                    }
                    className="p-1 rounded-md outline-[#9d9d9d] w-2/3 border-solid border text-center"
                  />
                </td>
                <td>
                  <Trash
                    onClick={() => {
                      dispatch({
                        type: "DELETE_SET",
                        payload: { exerciseId: exercise.id, index },
                      });
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-7">
        <Button
          buttonType={"plain"}
          className="text-red-400"
          onClick={() =>
            dispatch({
              type: "ADD_SET",
              payload: { exerciseId: exercise.id },
            })
          }
        >
          Add Set
        </Button>
      </div>
      <div className="justify-end flex gap-4 mt-12">
        <Button
          buttonType={"secondary"}
          className={"!px-4 !py-1"}
          onClick={() => {
            dispatch({
              type: "DELETE_EXERCISE",
              payload: { exerciseId: exercise.id },
            });
          }}
        >
          Remove
        </Button>
      </div>
    </li>
  );
};

export default SubmitExerciseForm;
