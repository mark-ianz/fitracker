// Protected Page!!!!!!!!!!!!

// Components
import AddMoreButton from "../components/WorkoutsFeed/Create/AddMoreButton";
import Preview from "../components/WorkoutsFeed/ViewWorkout/Preview";

// Provider
import useAuthContext from "../utils/hooks/useAuthContext";

const Home = () => {
  const { username } = useAuthContext();
  return (
    <main>
      <>
        <h1 className="font-bold text-6xl">Welcome {username}!</h1>
        <div className="bg-red-500 border-gray-400 w-full border-b-2 mt-10 mb-4"></div>
        <section>
          <Preview />
        </section>
      </>
    </main>
  );
};

export default Home;
