import useExercisesFormContext from "../../../utils/hooks/useExercisesFormContext";
import AddMoreButton from "./AddMoreButton";
import ExercisesPerformed from "../ViewWorkout/ExercisesPerformed";
import SubmitExerciseForm from "./SubmitExerciseForm";

const ExercisesPerfomedForm = () => {
  // Dependencies
  const { exercises, dispatch, isAddingExercise, isEditing } =
    useExercisesFormContext();

  const handleEditClick = (e) => {
    const id = e.target.getAttribute("data-id");

    const exercise = exercises.find((exercise) => {
      return exercise.id === id;
    });

    dispatch({ type: "SET_EDITING", payload: exercise });
  };

  return (
    <>
      <h2 className="text-xl mb-4">Exercises Performed</h2>
      {/* If exercises has a value v */}
      {exercises.length > 0 && (
        <ul className="mb-4 flex flex-col gap-4">
          <ExercisesPerformed
            exercisesPerformed={exercises}
            canEdit={true}
            editClickFunction={handleEditClick}
          />
        </ul>
      )}

      {/* Adding Post Form v */}
      {isAddingExercise && <SubmitExerciseForm />}

      {/* Add Exercises Button, show only if not adding exercise and not editing */}
      {!isAddingExercise && !isEditing && (
        <AddMoreButton
        className={"w-full h-64"}
          onClick={() =>
            dispatch({ type: "SET_ADDING_EXERCISE", payload: true })
          }
          content={"Add exercises"}
        />
      )}
    </>
  );
};

export default ExercisesPerfomedForm;
