import React from "react";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
  return (
    <li className="shadow-md p-4 border-solid border-[1px]">
      <Link to={`/programs/${program._id}`}>
        <p className="font-bold text-lg mb-4">{program.title}</p>
        <p>{program.description}</p>
      </Link>
    </li>
  );
};

export default ProgramCard;
