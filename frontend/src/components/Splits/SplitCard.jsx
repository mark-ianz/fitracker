import React from "react";
import { Link } from "react-router-dom";

const SplitCard = ({ split }) => {
  return (
    <li className="shadow-md p-4 border-solid border rounded-md">
      <Link to={`/splits/${split._id}`}>
        <p className="font-bold text-lg mb-4 text-red-400">{split.title}</p>
        <p>{split.description}</p>
      </Link>
    </li>
  );
};

export default SplitCard;
