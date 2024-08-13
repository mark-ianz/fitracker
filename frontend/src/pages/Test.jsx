import React from "react";

const Test = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <nav className="flex justify-between items-center bg-white shadow-md p-4 mb-6">
        <h1 className="text-xl font-bold">FITRACKER</h1>
        <div>
          <a href="#" className="text-gray-600 hover:text-red-500 mr-4">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 mr-4">
            Programs
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 mr-4">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 mr-4">
            About
          </a>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </div>
      </nav>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome admin!</h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Workout History
          </h2>
          <div className="flex items-center">
            <select className="border rounded-lg px-4 py-2 mr-2">
              <option>Sort By</option>
              <option>Date</option>
              <option>Workout Type</option>
            </select>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
              Log workout
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">haw</h3>
              <p className="text-gray-500">Tags: Workout</p>
              <p className="text-gray-500">Location: Gym</p>
              <p className="text-gray-500">Exercises Performed: 1</p>
            </div>
            <p className="text-gray-400">Tuesday, 13 August 2024, 01:43 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">asd</h3>
              <p className="text-gray-500">Tags: Workout</p>
              <p className="text-gray-500">Location: Gym</p>
              <p className="text-gray-500">Exercises Performed: 1</p>
            </div>
            <p className="text-gray-400">Tuesday, 13 August 2024, 01:41 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
