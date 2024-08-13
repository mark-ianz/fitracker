// Protected Page!!!!!!!!!!!!

// Components
import AddMoreButton from "../components/WorkoutsFeed/Create/AddMoreButton";
import Preview from "../components/WorkoutsFeed/ViewWorkout/Preview";

// Provider
import useAuthContext from "../utils/hooks/useAuthContext";

const Home = () => {
  const { username } = useAuthContext();
  return (
    <main className="mx-auto max-w-3xl w-full">
      <h1 className="font-bold text-4xl text-center mb-12">
        Welcome {username}!
      </h1>
      <section>
        <Preview />
      </section>
    </main>
  );
};

export default Home;
