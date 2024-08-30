// Protected Page!!!!!!!!!!!!

// Components
import Preview from "../components/WorkoutsFeed/ViewWorkout/Preview";
// Provider

const History = () => {
  console.log(process.env.REACT_APP_BACKEND_BASE_URL);
  return (
    <main className="flex flex-col items-center">
      <Preview />
    </main>
  );
};

export default History;
