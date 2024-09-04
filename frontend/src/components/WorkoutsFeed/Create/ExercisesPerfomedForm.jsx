import useCreateSessionContext from "../../../utils/hooks/useCreateSessionContext";
import Button from "../../Button";
import AddMoreButton from "./AddMoreButton";
import SubmitExerciseForm from "./SubmitExerciseForm";

const ExercisesPerfomedForm = () => {
  // Dependencies
  const { exercises, dispatch, error } = useCreateSessionContext();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h2 className="text-xl">Exercises Performed</h2>
        <Button
          buttonType={"plain"}
          className={"text-red-400"}
          onClick={() => dispatch({ type: "RESET_FORM" })}
        >
          Clear
        </Button>
      </div>
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
