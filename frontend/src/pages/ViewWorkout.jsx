// Dependencies
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

// Hooks

// Components
import ExercisesPerformed from "../components/WorkoutsFeed/ViewWorkout/ExercisesPerformed";
import useAuthContext from "../utils/hooks/useAuthContext";
import useWorkoutContext from "../utils/hooks/useWorkoutContext";
import { useEffect, useState } from "react";

const ViewWorkout = () => {
  const navigate = useNavigate();
  const { dispatch } = useWorkoutContext();
  const { workout_id } = useParams();
  const { token } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fitracker.onrender.com/api/workouts/${workout_id}`,
          {
            method: "get",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw Error(result.error);
        }

        setWorkout(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkout();
  }, [workout_id, token]);

  const handleDeleteClick = async () => {
    const response = await fetch(
      `https://fitracker.onrender.com/api/workouts/${workout_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      }
    );
    dispatch({ type: "CLEAR_WOROKUTS" });
    navigate("/");
  };

  return (
    <div>
      {workout && (
        <>
          <div className="flex flex-row items-center justify-center mb-4 gap-2">
            <div className="flex items-center">
              <button
                className="border-solid border-[1px] border-gray-500 rounded-full p-1"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <img src="/arrow-left.svg" alt="back button" className="w-7" />
              </button>
            </div>
            <span>
              <p className="font-bold text-xl">{workout.name}</p>
              <p className="text-gray-400 text-sm">
                {format(workout.date, "iiii, dd MMMM yyyy, hh:mm a")}
              </p>
            </span>
            <button onClick={handleDeleteClick} className="w-8 h-8 ml-auto">
              <svg
                viewBox="0 0 24 24"
                width="36px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z"
                    stroke="#f87171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          <div className="text-gray-400 text-sm mb-4">
            <p>Location: {workout.location}</p>
            <p>Tags: {workout.tags}</p>
          </div>
          <p className="mb-2">{workout.description}</p>
          <div className="mt-4">
            <p className="font-bold text-xl">Exercises Performed</p>
            <ul className="grid grid-cols-5 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[470px]:grid-cols-1">
              <ExercisesPerformed
                exercisesPerformed={workout.exercisesPerformed}
              />
            </ul>
          </div>
        </>
      )}
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          {error}.{" "}
          <Link className="text-red-400 underline" to={"/"}>
            Go back home
          </Link>{" "}
        </p>
      )}
    </div>
  );
};

export default ViewWorkout;
