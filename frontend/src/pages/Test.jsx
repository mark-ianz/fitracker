import { useEffect } from "react";
import usersAPI from "../utils/api/users";

const Test = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Workout Session Logging
            </h2>
            <p className="text-gray-600">
              Easily log your workout sessions by entering details such as the
              session name, description, location, date, and tags.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Exercise Input
            </h2>
            <p className="text-gray-600">
              Input the exercises you performed during your session, including
              sets, reps, and weights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Account-Based Access
            </h2>
            <p className="text-gray-600">
              Each user has their own account, ensuring that you can only see
              and manage your workout sessions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Recommended Workout Splits
            </h2>
            <p className="text-gray-600">
              Browse through a variety of recommended workout splits tailored to
              different fitness goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              One-Click Split Logging
            </h2>
            <p className="text-gray-600">
              Log a recommended workout split with a single click, automatically
              filling in the exercises with adjustable sets and reps.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Custom Workout Splits
            </h2>
            <p className="text-gray-600">
              Create and save your own workout splits, tailored to your unique
              fitness goals and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
