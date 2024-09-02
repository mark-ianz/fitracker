import { useEffect } from "react";
import useExercisesFormContext from "../../../utils/hooks/createSession/useExercisesFormContext";
import Button from "../../Button";
import useWorkoutSessionFormContext from "../../../utils/hooks/createSession/useWorkoutSessionFormContext";
import useModalContext from "../../../utils/hooks/useModalContext";

const WorkoutSessionForm = ({ onSubmit }) => {
  // Form states
  const {
    sessionName,
    description,
    tags,
    location,
    dateTime,
    error,
    dispatch: sessionFormDispatch,
  } = useWorkoutSessionFormContext();

  const { closeModal } = useModalContext();

  // Check if current workout session is from split
  const { fromSplit, programName, programDescription } =
    useExercisesFormContext();

  // If true, set the name and description to the split info
  useEffect(() => {
    if (fromSplit) {
      sessionFormDispatch({ type: "SET_SESSION_NAME", payload: programName });
      sessionFormDispatch({
        type: "SET_DESCRIPTION",
        payload: programDescription,
      });
    }
  }, [fromSplit, programDescription, programName, sessionFormDispatch]);

  // Handle Submit
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
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
                sessionFormDispatch({
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
                sessionFormDispatch({
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
                sessionFormDispatch({
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
                sessionFormDispatch({
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
                sessionFormDispatch({
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
            <Button buttonType="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button buttonType="primary" toSubmit={true}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default WorkoutSessionForm;
