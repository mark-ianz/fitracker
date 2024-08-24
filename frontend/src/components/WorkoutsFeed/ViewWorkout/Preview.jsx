import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWorkoutContext from "../../../utils/hooks/useWorkoutContext";
import { format } from "date-fns";
import useAuthContext from "../../../utils/hooks/useAuthContext";
import SortButton from "./SortButton";
import workoutsAPI from "../../../utils/api/workouts";

// Hooks

const Preview = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        setError("");
        setLoading(true);
        const { data } = await workoutsAPI.get("/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            sort,
          },
        });
        dispatch({ type: "SET_WORKOUTS", payload: data });
      } catch (error) {
        setError("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchWorkout();
  }, [token, dispatch, sort]);

  useEffect(() => {
    if (workouts && workouts.length <= 0) {
      return (
        <p className="mt-6">
          No workout session yet.{" "}
          <Link className="underline text-[#f87171]" to="/create">
            Upload now.
          </Link>
        </p>
      );
    }
  }, [workouts]);

  return (
    <section className="max-w-screen-md w-full">
      {workouts && (
        <>
          <SortButton setSort={setSort} />
          <ul className="flex flex-col gap-4">
            {workouts.map((workout) => {
              return (
                <li
                  key={workout._id}
                  className="shadow-md rounded-md border-gray border-solid border-[1px] hover:scale-105 transition-all"
                >
                  <Link
                    to={`/workout/${workout._id}`}
                    className="flex flex-row items-center gap-4 justify-start p-6"
                  >
                    <div className="flex flex-col flex-grow w-full">
                      <span className="flex flex-row items-center mb-4 flex-wrap">
                        <p className="text-2xl mr-auto">{workout.name}</p>
                        <p className="text-gray-600">
                          {format(workout.date, "iiii, dd MMMM yyyy, hh:mm a")}
                        </p>
                      </span>
                      <div className="flex flex-col">
                        {workout.description && (
                          <p className="line-clamp-2">
                            Description: {workout.description}
                          </p>
                        )}
                        <p>Tags: {workout.tags}</p>
                        <p>Location: {workout.location}</p>
                        <p>
                          Exercises Performed:{" "}
                          {workout.exercisesPerformed.length}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {loading && <p>Loading..</p>}
      {error && <p>{error}</p>}
    </section>
  );
};
export default Preview;
