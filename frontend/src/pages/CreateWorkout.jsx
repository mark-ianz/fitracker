import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import ExercisesPerfomedForm from "../components/WorkoutsFeed/Create/ExercisesPerfomedForm";
import WorkoutSessionForm from "../components/WorkoutsFeed/Create/WorkoutSessionForm";
import useModalContext from "../utils/hooks/useModalContext";
import workoutsAPI from "../utils/api/workouts";
import useWorkoutSessionFormContext from "../utils/hooks/createSession/useWorkoutSessionFormContext";
import useAuthContext from "../utils/hooks/useAuthContext";
import useExercisesFormContext from "../utils/hooks/createSession/useExercisesFormContext";

const CreateWorkout = () => {
  const { openModal, closeModal } = useModalContext();
  const navigate = useNavigate();

  // Dependencies
  const { token, _id } = useAuthContext();
  const { exercises, dispatch: exercisesDispatch } = useExercisesFormContext();
  const {
    sessionName,
    description,
    tags,
    location,
    dateTime,
    dispatch: sessionFormDispatch,
  } = useWorkoutSessionFormContext();

  const handleFormSubmit = async (e) => {
    // Add validations
    e.preventDefault();

    const workout = {
      user: _id,
      name: sessionName,
      exercisesPerformed: exercises,
      description,
      tags,
      location,
      date: dateTime,
    };
    console.log("Workout object:", workout);

    try {
      const { data } = await workoutsAPI.post("/new", workout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      sessionFormDispatch({ type: "RESET_FORM" });
      exercisesDispatch({ type: "RESET_EXERCISES" });
      closeModal();
      navigate("/workout/" + data._id);
    } catch (error) {
      if (error.response) {
        sessionFormDispatch({
          type: "SET_ERROR",
          payload: { error: error.response.data.error },
        });
      } else {
        sessionFormDispatch({
          type: "SET_ERROR",
          payload: { error: error.message },
        });
      }
    }
  };
  return (
    <main className="flex flex-row items-center justify-center gap-10">
      <section className="w-full max-w-screen-md gap-10 max-md:flex-col">
        <div className="p-4 sticky top-6 z-40">
          <div className="flex items-center justify-between gap-2 p-4 rounded-md shadow-md border mb-4 bg-white flex-wrap">
            <div className="flex gap-2">
              <BackButton />
              <h1 className="text-xl font-bold">Log Session</h1>
            </div>
            <Button
              buttonType={"primary"}
              className={"!px-4 !py-1"}
              onClick={() =>
                openModal(
                  <WorkoutSessionForm onSubmit={(e) => handleFormSubmit(e)} />
                )
              }
            >
              Save
            </Button>
          </div>
        </div>
        <ExercisesPerfomedForm />
      </section>
    </main>
  );
};

export default CreateWorkout;
