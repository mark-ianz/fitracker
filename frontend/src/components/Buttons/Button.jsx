import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  className,
  onClick,
  buttonType,
  toSubmit,
  isDisabled,
  redirect,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (redirect) navigate(redirect);
    if (onClick) onClick();
  };

  const types = {
    primary: "text-white bg-red-400",
    secondary: "border-solid border-[1px] border-red-400 text-red-400",
  };

  return (
    <button
      type={toSubmit ? "submit" : "button"}
      disabled={isDisabled}
      className={`${types[buttonType]} text-base py-2 rounded ${className} px-6 disabled:saturate-50 transition-all`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
