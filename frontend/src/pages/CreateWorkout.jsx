import ExercisesPerfomedForm from "../components/WorkoutsFeed/Create/ExercisesPerfomedForm";
import WorkoutSessionForm from "../components/WorkoutsFeed/Create/WokroutSessionForm";

const CreateWorkout = () => {
  return (
    <main className="flex flex-row justify-center gap-6 max-sm:flex-col max-sm:gap-10">
      <section className="w-1/2 max-w-sm max-sm:w-full max-sm:max-w-none">
        <WorkoutSessionForm />
      </section>
      <section className="w-1/2 max-w-sm max-sm:w-full max-sm:max-w-none">
        <ExercisesPerfomedForm />
      </section>
    </main>
  );
};

export default CreateWorkout;
