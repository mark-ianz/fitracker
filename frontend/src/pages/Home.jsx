// Protected Page!!!!!!!!!!!!

// Components
import Preview from "../components/WorkoutsFeed/ViewWorkout/Preview";

// Provider
import useAuthContext from "../utils/hooks/useAuthContext";

const Home = () => {
  const { username } = useAuthContext();
  return (
    <main className="mx-auto w-full max-w-screen-md">
      <h1 className="text-3xl mb-8 text-center">
        Welcome <span className="font-bold">{username}</span>!
      </h1>
      <section>
        <Preview />
      </section>
    </main>
  );
};

export default Home;
