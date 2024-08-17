const Button = ({
  children,
  className,
  onClick,
  buttonType,
  toSubmit,
  isDisabled,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const types = {
    primary: "text-white bg-red-400 hover:brightness-[95%] py-2 px-6",
    secondary: "border-solid border-[1px] border-red-400 text-red-400 px-6 py-2",
    plain: "text-gray-600",
  };

  return (
    <button
      type={toSubmit ? "submit" : "button"}
      disabled={isDisabled}
      className={`${types[buttonType]} rounded ${className} disabled:saturate-50 transition-all`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
