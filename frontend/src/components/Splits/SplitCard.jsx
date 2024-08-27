import React from "react";
import { Link } from "react-router-dom";

const SplitCard = ({ split }) => {
  return (
    <li className="shadow-md border-solid border rounded-md min-h-48">
      <Link className="block h-full p-4" to={`/splits/${split._id}`}>
        <p className="font-bold text-lg mb-4 text-red-400">{split.title}</p>
        <p>{split.description || "No split description provided"}</p>
      </Link>
    </li>
  );
};

export default SplitCard;
