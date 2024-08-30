import useAuthContext from "../utils/hooks/useAuthContext";
import useModalContext from "../utils/hooks/useModalContext";
import LoginForm from "../components/Forms/LoginForm";

const Button = ({
  children,
  className,
  onClick,
  buttonType,
  toSubmit,
  isDisabled,
  requiresAuth,
}) => {
  const { isAuth } = useAuthContext();
  const { openModal } = useModalContext();

  const handleClick = () => {
    if (requiresAuth && !isAuth) {
      openModal(<LoginForm />);
    } else {
      if (onClick) onClick();
    }
  };

  const types = {
    primary: "text-white bg-red-400 hover:brightness-[95%] py-2 px-6",
    secondary: "border-solid border border-red-400 text-red-400 px-6 py-2",
    primarySm: "text-white bg-red-400 hover:brightness-[95%] py-1 px-6",
    secondarysm: "border-solid border border-red-400 text-red-400 px-6 py-1",
    plain: "text-gray-600",
  };

  return (
    <button
      type={toSubmit ? "submit" : "button"}
      disabled={isDisabled}
      className={`${types[buttonType]} rounded ${className} disabled:saturate-50 transition-all outline-none`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
