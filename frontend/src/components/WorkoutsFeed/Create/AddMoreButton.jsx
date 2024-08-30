import React from "react";
import useAuthContext from "../../../utils/hooks/useAuthContext";
import useModalContext from "../../../utils/hooks/useModalContext";
import LoginForm from "../../Forms/LoginForm";

const AddMoreButton = ({ onClick, children, className, requiresAuth }) => {
  const { isAuth } = useAuthContext();
  const { openModal } = useModalContext();

  const handleOnClick = () => {
    if (requiresAuth && !isAuth) {
      openModal(<LoginForm />);
    } else {
      if (onClick) onClick();
    }
  };
  return (
    <button
      className={`border-2 text-red-400 border-red-400 flex flex-col items-center justify-center rounded-xl border-dashed ${className}`}
      onClick={handleOnClick}
      type="button"
    >
      <svg
        width="48px"
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
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#f87171"
            strokeWidth="1.5"
          ></circle>{" "}
          <path
            d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
            stroke="#f87171"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
        </g>
      </svg>
      <p className="mt-2">{children}</p>
    </button>
  );
};

export default AddMoreButton;
