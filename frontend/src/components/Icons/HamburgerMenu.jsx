import React from "react";

const HamburgerMenu = ({ onClick, className, stroke }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <svg
      onClick={handleClick}
      className={`w-10 ${className}`}
      viewBox="0 0 24 24"
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
          d="M4 6H20M4 12H20M4 18H20"
          stroke={stroke || "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default HamburgerMenu;
