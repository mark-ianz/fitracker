import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ className }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${className}`}
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src="/arrow-left.svg" alt="back button" className="w-7" />
    </button>
  );
};

export default BackButton;
