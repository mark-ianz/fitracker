import React from "react";
import { useParams } from "react-router-dom";

const ViewProgram = () => {
  // If clicked it will be redirected to /programs/:id and inside is program's full details
  // Fetch the data with the id parameter
  const { id } = useParams();

  // Inside view program there is a "do" button
  // If clicked it will be redirected to /create with a _id of the program
  // Wen at /create it will check if it's come from the program and if it is
  // Fetch to the API /workouts/program/:id
  // Get the exercises afrom the API and dispatch it to local exercises
  // As of now the program input can only be added on the database or postman

  return (
    <div>
      <h1>Program Name</h1>
      <p>Description</p>
      <ul className="set-of-programs grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <li className="push shadow-md p-4 border-solid border-[1px]">
          <p className="font-bold text-xl text-red-400">Push Day</p>
          <p>Target: Chest, Shoulder and Triceps</p>
          <p className="text-gray-400 my-4">
            Focuses on strengthening the muscles involved in pushing movements,
            primarily the chest, shoulders, and triceps. This day emphasizes
            developing upper body strength and muscular endurance through
            exercises that require pushing resistance away from the body.
          </p>
          <p>Exercises:</p>
          <ul>
            <li>Bench Press</li>
            <li>Incline Bench Press</li>
            <li>Pec Deck Fly</li>
            <li>Shoulder Press</li>
            <li>Lateral Raise</li>
            <li>Tricep Extension</li>
          </ul>
        </li>
        <li className="pull shadow-md p-4 border-solid border-[1px]">
          <p className="font-bold text-xl text-red-400">Pull Day</p>
          <p>Target: Back and Biceps</p>
          <p className="text-gray-400 my-4">
            Concentrates on the muscles used in pulling movements, including the
            back and biceps. The goal is to build upper body strength by
            engaging muscles that pull resistance toward the body, promoting a
            balanced physique and improved posture.
          </p>
          <p>Exercises:</p>
          <ul>
            <li>Pulldown</li>
            <li>T-Bar Row</li>
            <li>Pullover</li>
            <li>Face Pull</li>
            <li>Biceps Curl</li>
            <li>Hammer Curl</li>
          </ul>
        </li>
        <li className="leg shadow-md p-4 border-solid border-[1px]">
          <p className="font-bold text-xl text-red-400">Leg Day</p>
          <p>Target: Quadriceps, Hamstring, Glutes & Calves</p>
          <p className="text-gray-400 my-4">
            Dedicated to the lower body, this day targets the quadriceps,
            hamstrings, glutes, and calves. It emphasizes building strength,
            power, and stability in the legs and core, which are essential for
            overall athletic performance and functional movement.
          </p>
          <p>Exercises:</p>
          <ul>
            <li>Squat</li>
            <li>Deadlift</li>
            <li>Leg Press</li>
            <li>Leg Extension</li>
            <li>Leg Curl</li>
            <li>Calf Raises</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ViewProgram;
