import BackButton from "../components/BackButton";
import Button from "../components/Button";
import ExercisesPerfomedForm from "../components/WorkoutsFeed/Create/ExercisesPerfomedForm";
import WorkoutSessionForm from "../components/WorkoutsFeed/Create/WorkoutSessionForm";
import useModalContext from "../utils/hooks/useModalContext";

const CreateWorkout = () => {
  const { openModal } = useModalContext();
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
              onClick={() => openModal(<WorkoutSessionForm />)}
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
