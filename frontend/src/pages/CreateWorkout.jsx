import BackButton from "../components/BackButton";
import LineSeperator from "../components/LineSeperator";
import ExercisesPerfomedForm from "../components/WorkoutsFeed/Create/ExercisesPerfomedForm";
import WorkoutSessionForm from "../components/WorkoutsFeed/Create/WorkoutSessionForm";

const CreateWorkout = () => {
  return (
    <main className="flex flex-row items-center justify-center gap-10">
      <section className="flex w-full max-w-screen-md gap-10 max-md:flex-col">
        <div className="grow basis-1">
          <div className="flex gap-2 mb-4">
            <BackButton />
            <h1 className="text-xl font-bold">Log workout session</h1>
          </div>
          <LineSeperator className={"hidden max-sm:block my-4"} />
          <WorkoutSessionForm />
        </div>
        <div className="grow basis-1">
          <ExercisesPerfomedForm />
        </div>
      </section>
    </main>
  );
};

export default CreateWorkout;
