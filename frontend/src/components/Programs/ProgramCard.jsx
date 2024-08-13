import React from "react";
import { Link } from "react-router-dom";

const ProgramCard = () => {
  return (
    <li className="shadow-md p-4 border-solid border-[1px]">
      <Link to={"/programs/asdhasda98sdas"}>
        <p className="font-bold text-lg mb-4">Push Pull Leg (PPL)</p>
        <p>
          The PPL split, or Push/Pull/Legs split, is a straightforward training
          method where the body is divided into three parts: pushing muscles,
          pulling muscles, and legs. Each group is trained on a separate day,
          allowing for focused and efficient workouts that cover all major
          muscle groups.
        </p>
      </Link>
    </li>
  );
};

export default ProgramCard;
