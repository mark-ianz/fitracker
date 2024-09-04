import useCreateSessionContext from "../../../utils/hooks/useCreateSessionContext";
import AddMoreButton from "./AddMoreButton";
import SubmitExerciseForm from "./SubmitExerciseForm";

const ExercisesPerfomedForm = () => {
  // Dependencies
  const { exercises, dispatch, error } = useCreateSessionContext();

  return (
    <>
      <h2 className="text-xl mb-4">Exercises Performed</h2>
      {error && (
        <ul className="list-disc pl-5 mb-4 text-red-400">
          {error.map((error, index) => (
            <li key={index}>
              <p>{error}</p>
            </li>
          ))}
        </ul>
      )}
      <ul className="mb-4 grid gap-4 grid-cols-2 max-[550px]:grid-cols-1 exercises-performed">
        {exercises.map((exercise, index) => (
          <SubmitExerciseForm
            key={exercise.id}
            exercise={exercise}
            index={index}
          />
        ))}

        <AddMoreButton
          className={"w-full min-h-72"}
          onClick={() => dispatch({ type: "ADD_EMPTY_EXERCISE" })}
        >
          Add Exercises
        </AddMoreButton>
      </ul>
    </>
  );
};

export default ExercisesPerfomedForm;
