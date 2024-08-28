import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import LineSeperator from "../components/LineSeperator";
import Program from "../components/Splits/Program";
import useCreateSplitContext from "../utils/hooks/useCreateSplitContext";
import splits from "../utils/api/splits";
import useAuthContext from "../utils/hooks/useAuthContext";
import { useState } from "react";

const CreateSplit = () => {
  const { title, description, programs, dispatch } = useCreateSplitContext();
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const isFormValid = () => {
    if (!title) {
      setError("Title is required");
      return false;
    }

    if (programs.length <= 0) {
      setError("Program is required");
      return false;
    }

    for (const program of programs) {
      if (program.exercises.length <= 0) {
        setError("Add at least one exercise");
        return false;
      }

      if (!program.programName.trim()) {
        setError("Program name is required");
        return false;
      }

      for (const exercise of program.exercises) {
        if (!exercise.exerciseName.trim()) {
          setError("Exercise name is required");
          return false;
        }
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isFormValid()) return;
    console.log({
      title,
      description,
      programs,
    });
    try {
      await splits.post(
        "/",
        {
          title,
          description,
          programs,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "CLEAR_ALL" });
      navigate("/splits/custom");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <main className="flex items-center justify-center">
      <section
        className="flex flex-col w-full max-w-screen-sm border
        border-gray-100 rounded-xl p-10 bg-white shadow-md max-md:px-[5vw]"
      >
        <div className="flex gap-2">
          <BackButton />
          <h1 className="text-xl font-bold">Create Split</h1>
          <p>{error}</p>
        </div>
        <LineSeperator className={"my-4"} />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) =>
                dispatch({ type: "SET_TITLE", payload: e.target.value })
              }
              className="text-input"
              placeholder='(e.g, "PPL", "Bro Split", "Upper Lower")'
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) =>
                dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
              }
              className="text-input"
              placeholder="(Optional)"
            />
          </div>
          <Program />
          <div className="flex gap-2 items-center justify-end">
            <Button buttonType={"secondary"} onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button buttonType={"primary"} toSubmit={true}>
              Submit
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateSplit;

/* {
  "title": "PPL x Arnold Split",
  "description": "A hybrid of the Push/Pull/Legs split and Arnold Schwarzenegger's high-volume training principles. This split focuses on comprehensive muscle development with high volume and intensity.",
  "programs": [
    {
        "programName": "Push Day",
        "muscleTargets": "Chest, Shoulders, Triceps",
        "programDescription": "Focuses on pushing movements to develop the chest, shoulders, and triceps with a mix of compound and isolation exercises.",
        "exercises": [
            {
                "exerciseName": "Bench Press"
            },
            {
                "exerciseName": "Incline Dumbbell Press"
            },
            {
                "exerciseName": "Overhead Press"
            },
            {
                "exerciseName": "Lateral Raise"
            },
            {
                "exerciseName": "Tricep Dips"
            },
            {
                "exerciseName": "Tricep Pushdown"
            }
        ]
    },
  ]
} */
