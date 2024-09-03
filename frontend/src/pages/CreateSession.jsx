import BackButton from "../components/BackButton";
import Button from "../components/Button";
import ExercisesPerfomedForm from "../components/WorkoutsFeed/Create/ExercisesPerfomedForm";
import useCreateSessionContext from "../utils/hooks/useCreateSessionContext";
import useAuthContext from "../utils/hooks/useAuthContext";
import useUploadSession from "../utils/hooks/useUploadSession";
import { useState } from "react";
import useCreateSessionValidator from "../utils/validators/useCreateSessionValidator";

const CreateSession = () => {
  const uploadSession = useUploadSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isValid = useCreateSessionValidator();

  // Dependencies
  const { _id } = useAuthContext();
  const {
    sessionName,
    description,
    tags,
    location,
    dateTime,
    error,
    exercises,
    dispatch,
  } = useCreateSessionContext();

  const handleFormSubmit = async (e) => {
    // Add validations
    e.preventDefault();

    const workout = {
      user: _id,
      name: sessionName,
      exercisesPerformed: exercises,
      description,
      tags,
      location,
      date: dateTime,
    };

    console.log(isValid ());
    /* await uploadSession(workout); */
  };
  return (
    <main className="flex flex-row items-center justify-center gap-10">
      <section className="w-full max-w-screen-md gap-10 max-md:flex-col">
        <div className="p-4 sticky top-6 z-40">
          <div className="flex items-center justify-between gap-2 p-4 rounded-md shadow-md border mb-4 bg-white flex-wrap">
            <div className="flex gap-2">
              <BackButton />
              <h1 className="text-xl font-bold">Log Session</h1>
            </div>
            <Button
              buttonType={"primary"}
              className={"!px-4 !py-1"}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Save
            </Button>
          </div>
        </div>
        <ExercisesPerfomedForm />

        {/* DIY MODAL PARA MA NAVIGATE */}
        <div
          className={`${
            isModalOpen ? "flex" : "hidden"
          } fixed inset-0 z-50 items-center justify-center`}
        >
          <form
            onSubmit={handleFormSubmit}
            className="bg-white z-40 p-6 rounded-md shadow-md grow max-w-lg"
          >
            <h1 className="text-xl font-semibold mb-4">Save Workout Session</h1>
            <div className="input-container gap-4 flex flex-col">
              <div className="input-wrapper flex flex-col">
                <label htmlFor="sessionName">Session Name</label>
                <input
                  type="text"
                  value={sessionName}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_SESSION_NAME",
                      payload: e.target.value,
                    })
                  }
                  name="sessionName"
                  id="sessionName"
                  className="text-input"
                />
              </div>
              <div className="input-wrapper flex flex-col">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  value={description}
                  placeholder="(Optional)"
                  onChange={(e) =>
                    dispatch({
                      type: "SET_DESCRIPTION",
                      payload: e.target.value,
                    })
                  }
                  name="description"
                  id="description"
                  className="text-input"
                  rows={4}
                />
              </div>
              <div className="input-wrapper flex flex-col">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_TAGS",
                      payload: e.target.value,
                    })
                  }
                  name="tags"
                  id="tags"
                  className="text-input"
                />
              </div>
              <div className="input-wrapper flex flex-col">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_LOCATION",
                      payload: e.target.value,
                    })
                  }
                  name="location"
                  id="location"
                  className="text-input"
                />
              </div>
              <div className="input-wrapper flex flex-col">
                <label htmlFor="date">Date</label>
                <input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_DATE_TIME",
                      payload: e.target.value,
                    })
                  }
                  name="date"
                  id="date"
                  className="text-input"
                />
              </div>
            </div>
            <div className="flex flex-col items-end mt-4 gap-4">
              {error && <p className="text-gray-600 text-sm">{error}</p>}
              <div className="flex flex-row items-center gap-2">
                <Button
                  buttonType="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button buttonType="primary" toSubmit={true}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
          <div
            className="fixed inset-0 bg-black bg-opacity-20"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </div>
      </section>
    </main>
  );
};

export default CreateSession;
