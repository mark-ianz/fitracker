import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthContext from "../utils/hooks/useAuthContext";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import splitsAPI from "../utils/api/splits";
import programsAPI from "../utils/api/programs";
import LineSeperator from "../components/LineSeperator";
import ViewSplitSkeleton from "../components/Skeletons/ViewSplitSkeleton";
import useCreateSessionContext from "../utils/hooks/useCreateSessionContext";

const ViewSplit = () => {
  // Dependencies
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const { dispatch } = useCreateSessionContext();

  // Fetch the split data with the id parameter
  const { id } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [split, setSplit] = useState(null);
  const [programs, setPrograms] = useState(null);
  useEffect(() => {
    const fetchSplit = async () => {
      setLoading(true);
      try {
        const { data } = await splitsAPI.get(`/one/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        await fetchPrograms(data.split.programs);

        setSplit(data.split);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchPrograms = async (ids) => {
      try {
        const { data } = await programsAPI.get("/", {
          params: {
            ids,
          },
        });
        setPrograms(data.programs);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      }
    };

    fetchSplit();
  }, [id, token]);

  return (
    <main>
      <section>
        {error && (
          <>
            <div className="flex items-center gap-2">
              <BackButton />
              Go Back
            </div>
            <LineSeperator className={"my-4"} />
            <p>{error}</p>
          </>
        )}
        {split && (
          <>
            <div className="flex items-center gap-2 mb-4">
              <BackButton />
              <h1 className="text-2xl font-bold">{split.title}</h1>
            </div>
            <p className="mb-4">{split.description}</p>

            {programs && (
              <ul className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                {programs.map((program) => {
                  return (
                    <li
                      key={program._id}
                      className="shadow-md p-4 border-solid border rounded-md relative pb-24 min-h-64"
                    >
                      <p className="font-bold text-xl text-red-400">
                        {program.programName}
                      </p>
                      <p className="text-sm text-gray-600">
                        Target: {program.muscleTargets || "N/A"}
                      </p>
                      <p className="text-gray-600 my-4">
                        {program.programDescription ||
                          "No description provided"}
                      </p>
                      <p className="font-bold">Exercises:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {program.exercises.map((exercise) => {
                          return (
                            <li key={exercise.id}>{exercise.exerciseName}</li>
                          );
                        })}
                      </ul>
                      <Button
                        className={"absolute bottom-4 right-4"}
                        buttonType={"primary"}
                        requiresAuth={true}
                        onClick={() => {
                          dispatch({
                            type: "ADD_EXERCISES_FROM_SPLIT",
                            payload: {
                              exercises: [...program.exercises],
                              sessionName: program.programName,
                              description: program.programDescription,
                            },
                          });
                          navigate("/create");
                        }}
                      >
                        Log
                      </Button>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
        {loading && <ViewSplitSkeleton size={4} />}
      </section>
    </main>
  );
};

export default ViewSplit;
