import { useState } from "react";
import Button from "../Button";

const Exercises = () => {
  const [exercises, setExercises] = useState([
    { exerciseName: "Hello", id: 1236162312311 },
    { exerciseName: "World", id: 12361611 },
  ]);
  return (
    <div className="flex flex-col">
      <label htmlFor="exercise-input" className="font-bold text-xl mb-1">
        Exercises:
      </label>
      {exercises && (
        <ul className="flex flex-col gap-4">
          {exercises.map((exercise) => (
            <li className="flex flex-col w-full" key={exercise.id}>
              <label htmlFor="exerciseName">Exercise Name</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="exerciseName"
                  onChange={(e) => console.log(e.target.value)}
                  className="text-input w-full "
                  value={exercise.exerciseName}
                />
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
              </div>
            </li>
          ))}
          <div className="flex flex-col gap-2">
            <Button buttonType={"primary"}>Add Exercises</Button>
            <Button buttonType={"secondary"}>Delete Program</Button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Exercises;
