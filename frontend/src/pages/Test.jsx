import React, { useState } from "react";

const SplitExerciseForm = () => {
  const [formData] = useState({
    title: "Push/Pull/Leg Split",
    description: "A three-day split focusing on major muscle groups.",
    programs: [
      {
        programName: "Push Day",
        muscleTargets: "Chest, Shoulders, Triceps",
        programDescription: "Focus on pushing movements.",
        exercises: [
          { exerciseName: "Bench Press" },
          { exerciseName: "Overhead Press" },
        ],
      },
      {
        programName: "Pull Day",
        muscleTargets: "Back, Biceps",
        programDescription: "Focus on pulling movements.",
        exercises: [
          { exerciseName: "Pull-ups" },
          { exerciseName: "Barbell Row" },
        ],
      },
    ],
  });

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Split Exercise Form</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          readOnly
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          readOnly
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">Programs</h3>

      {formData.programs.map((program, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg bg-gray-50">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Name
            </label>
            <input
              type="text"
              value={program.programName}
              readOnly
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Muscle Targets
            </label>
            <input
              type="text"
              value={program.muscleTargets}
              readOnly
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Description
            </label>
            <textarea
              value={program.programDescription}
              readOnly
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <h4 className="text-lg font-semibold mb-2">Exercises</h4>

          {program.exercises.map((exercise, i) => (
            <div key={i} className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Exercise Name
              </label>
              <input
                type="text"
                value={exercise.exerciseName}
                readOnly
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          ))}

          <button className="mt-3 w-full bg-foo-red-400 text-white py-2 rounded-lg shadow-sm hover:bg-red-600 transition duration-200">
            + Add Exercise
          </button>
        </div>
      ))}

      <button className="w-full mb-4 bg-foo-red-400 text-white py-2 rounded-lg shadow-sm hover:bg-red-600 transition duration-200">
        + Add Program
      </button>

      <div className="flex justify-between">
        <button className="w-full mr-2 bg-gray-300 text-gray-700 py-2 rounded-lg shadow-sm hover:bg-gray-400 transition duration-200">
          Cancel
        </button>
        <button className="w-full ml-2 bg-foo-red-400 text-white py-2 rounded-lg shadow-sm hover:bg-red-600 transition duration-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SplitExerciseForm;
