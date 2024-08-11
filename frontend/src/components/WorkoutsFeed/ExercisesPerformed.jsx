import useExercisesFormContext from "../../utils/hooks/useExercisesFormContext.js";
import SubmitExerciseForm from "./Create/SubmitExerciseForm";

const ExercisesPerformed = ({ canEdit, editClickFunction, exercisesPerformed }) => {
  const { editing, isEditing, isAddingExercise } = useExercisesFormContext();

  return exercisesPerformed.map((exercise, index) => {
    // Get the total reps, weight and volume.
    const total = exercise.sets.reduce(
      (acc, set) => {
        acc.reps += set.reps;
        acc.weight += set.weight;
        acc.volume = acc.weight * acc.reps;
        return acc;
      },
      { reps: 0, weight: 0, volume: 0 }
    );

    if (editing && exercise.id === editing.id) {
      return <SubmitExerciseForm key={exercise.id} exerciseId={exercise.id} />;
    }

    return (
      <li
        key={exercise.id || index}
        className="border-solid border-[1px] shadow-sm py-4 rounded-md relative pb-20"
      >
        <div className="flex flex-row justify-between px-6">
          <p className="font-bold text-lg break-words max-w-[65%]">{exercise.exerciseName}</p>
          <p className=" text-gray-500 text-sm text-center">
            {exercise.sets.length} set/s
          </p>
        </div>
        <table className="w-full min-w-fit">
          <thead className="w-full">
            <tr className="flex flex-row justify-between">
              <th className="w-1/3 text-center font-normal text-sm text-gray-500">
                Set
              </th>
              <th className="w-1/3 text-center font-normal text-sm text-gray-500">
                Reps
              </th>
              <th className="w-1/3 text-center font-normal text-sm text-gray-500">
                Weight
              </th>
            </tr>
          </thead>
          <tbody className="w-full font-bold">
            {exercise.sets.map((set, index) => {
              return (
                <tr key={index} className="flex flex-row justify-around">
                  <td className="w-1/3 text-center">{index + 1}</td>
                  <td className="w-1/3 text-center">{set.reps}</td>
                  <td className="w-1/3 text-center">{set.weight} lb</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-sm text-gray-500 absolute bottom-2 left-2">
          Total Volume: {total.volume} lb
        </p>

        {/* If can edit, currently not editing and not adding exercise, show the Edit button */}
        {(canEdit && !isEditing && !isAddingExercise) && (
          <div className="absolute bottom-2 right-2 ">
            <button
              onClick={editClickFunction}
              data-id={exercise.id}
              className="border-solid border-[1px] border-red-400 text-red-400 rounded-md px-6 py-1"
            >
              Edit
            </button>
          </div>
        )}
      </li>
    );
  });
};

export default ExercisesPerformed;
