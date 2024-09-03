import useCreateSessionContext from "../../../utils/hooks/useCreateSessionContext";
import AddMoreButton from "./AddMoreButton";
import SubmitExerciseForm from "./SubmitExerciseForm";

const ExercisesPerfomedForm = () => {
  // Dependencies
  const { exercises, dispatch } = useCreateSessionContext();

  return (
    <>
      <h2 className="text-xl mb-4">Exercises Performed</h2>
      <ul className="mb-4 grid gap-4 grid-cols-2 max-[550px]:grid-cols-1 exercises-performed">
        {exercises.map((exercise) => (
          <SubmitExerciseForm key={exercise.id} exercise={exercise} />
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
