import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../../utils/hooks/useAuthContext";
import useExercisesFormContext from "../../../utils/hooks/useExercisesFormContext";
import Button from "../../Button";

const WokroutSessionForm = () => {
  // Dependencies
  const navigate = useNavigate();
  const { token, _id } = useAuthContext();
  const { exercises } = useExercisesFormContext();
  const [error, setError] = useState("");

  // Form states
  const [sessionName, setSessionName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("Workout");
  const [location, setLocation] = useState("Gym");
  const [dateTime, setDateTime] = useState(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const formattedDate = now.toISOString().slice(0, 16);
    return formattedDate;
  });

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


    const response = await fetch("https://fitracker.onrender.com/api/workouts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(workout),
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    } else {
      navigate("/");
    }
  };
  
  return (
    <>
      <h1 className="text-xl mb-4">Log workout session</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container gap-4 flex flex-col">
          <div className="input-wrapper flex flex-col">
            <label htmlFor="sessionName">Session Name</label>
            <input
              type="text"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              name="sessionName"
              id="sessionName"
              className="py-1 px-2 border-solid border-[1px] rounded-md outline-[#9d9d9d]"
            />
          </div>
          <div className="input-wrapper flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              value={description}
              placeholder="(Optional)"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              id="description"
              className="py-1 px-2 border-solid border-[1px] rounded-md outline-[#9d9d9d]"
              rows={4}
            />
          </div>
          <div className="input-wrapper flex flex-col">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              name="tags"
              id="tags"
              className="py-1 px-2 border-solid border-[1px] rounded-md outline-[#9d9d9d]"
            />
          </div>
          <div className="input-wrapper flex flex-col">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              id="location"
              className="py-1 px-2 border-solid border-[1px] rounded-md outline-[#9d9d9d]"
            />
          </div>
          <div className="input-wrapper flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              name="date"
              id="date"
              className="py-1 px-2 border-solid border-[1px] rounded-md outline-[#9d9d9d]"
            />
          </div>
        </div>
        <div className="flex flex-col items-end mt-4 gap-4">
          <p className="text-gray-400 text-sm">{error}</p>
          <div className="flex flex-row items-center gap-2">
            <Button buttonType="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button buttonType="primary" toSubmit={true}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default WokroutSessionForm;
