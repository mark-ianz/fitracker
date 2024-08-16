import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthContext from "../utils/hooks/useAuthContext";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import axios from "axios";

const ViewProgram = () => {
  // If clicked it will be redirected to /splits/:id and inside is split's full details
  // Fetch the data with the id parameter
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const [error, setError] = useState("");
  const [split, setSplit] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/splits/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSplit(data.split);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      }
    };

    fetchData();
  }, []);

  // Inside view program there is a "do" button
  // If clicked it will be redirected to /create with a _id of the program
  // Wen at /create it will check if it's come from the program and if it is
  // Fetch to the API /programs/program/:id
  // Get the exercises afrom the API and dispatch it to local exercises
  // As of now the program input can only be added on the database or postman

  return (
    <main>
      {error && <p>{error}</p>}
      {split && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <BackButton />
            <h1 className="text-2xl font-bold">{split.title}</h1>
          </div>
          <p className="mb-4">{split.description}</p>

          {/* Fetch the array of ids */}
          {/* <ul className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {split.programs.map((program) => {
              return (
                <li
                  key={program._id}
                  className="push shadow-md p-4 border-solid border-[1px] rounded-md relative pb-24"
                >
                  <p className="font-bold text-xl text-red-400">
                    {program.programName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Target: {program.muscleTargets}
                  </p>
                  <p className="text-gray-600 my-4">
                    {program.programDescription}
                  </p>
                  <p className="font-bold">Exercises:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {program.exercises.map((exercise) => {
                      return <li key={exercise.id}>{exercise.exerciseName}</li>;
                    })}
                  </ul>
                  <Button
                    className={"absolute bottom-4 right-4"}
                    buttonType={"primary"}
                    onClick={() => {
                      navigate (`/create/${program._id}`)
                    }}
                  >
                    Log
                  </Button>
                </li>
              );
            })}
          </ul> */}
        </>
      )}
    </main>
  );
};

export default ViewProgram;
