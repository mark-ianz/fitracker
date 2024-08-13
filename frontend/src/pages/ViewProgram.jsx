import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthContext from "../utils/hooks/useAuthContext";

const ViewProgram = () => {
  // If clicked it will be redirected to /programs/:id and inside is program's full details
  // Fetch the data with the id parameter
  const { id } = useParams();
  const { token } = useAuthContext();
  const [error, setError] = useState("");
  const [program, setProgram] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/programs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        if (!response.ok) {
          throw Error(result.error);
        }
        setProgram(result.program);
        console.log(result.program);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Inside view program there is a "do" button
  // If clicked it will be redirected to /create with a _id of the program
  // Wen at /create it will check if it's come from the program and if it is
  // Fetch to the API /workouts/program/:id
  // Get the exercises afrom the API and dispatch it to local exercises
  // As of now the program input can only be added on the database or postman

  return (
    <div>
      {error && <p>{error}</p>}
      {program && (
        <>
          <h1>{program.title}</h1>
          <p>{program.description}</p>
          <ul className="set-of-programs grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {program.workouts.map((workout) => {
              return (
                <li
                  key={workout._id}
                  className="push shadow-md p-4 border-solid border-[1px]"
                >
                  <p className="font-bold text-xl text-red-400">Push Day</p>
                  <p>Target: {workout.muscleTargets}</p>
                  <p className="text-gray-400 my-4">
                    {workout.workoutDescription}
                  </p>
                  <p>Exercises:</p>
                  <ul>
                    {workout.exercises.map((exercise) => {
                      return <li key={exercise.id}>{exercise.exerciseName}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ViewProgram;
