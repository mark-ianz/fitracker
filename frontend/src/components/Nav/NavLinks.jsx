// Dependencies
import { NavLink } from "react-router-dom";
import useModalContext from "../../utils/hooks/useModalContext";

// Components
import Button from "../Button";
import LoginForm from "../Forms/LoginForm";
import useAuthContext from "../../utils/hooks/useAuthContext";
import useLogout from "../../utils/hooks/useLogout";

const NavLinks = ({ className }) => {
  const { openModal } = useModalContext();
  const { isAuth } = useAuthContext();
  const logout = useLogout();

  return (
    <ul
      className={`nav-links flex items-center min-w-fit ${className} text-gray-600 gap-4 min-w-fit max-[345px]:gap-0`}
    >
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/home"
          className="p-1 text-center hover:text-red-400 transition-all"
        >
          Home
        </NavLink>
      </li>
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/programs"
          className="p-1 text-center hover:text-red-400 transition-all"
        >
          Programs
        </NavLink>
      </li>
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/about"
          className="p-1 text-center hover:text-red-400 transition-all"
        >
          About
        </NavLink>
      </li>
      {!isAuth ? (
        <Button
          buttonType="plain"
          className={"grow"}
          onClick={() => {
            openModal(<LoginForm />);
          }}
        >
          Login
        </Button>
      ) : (
        <Button buttonType="plain" className={"grow"} onClick={logout}>
          Logout
        </Button>
      )}
    </ul>
  );
};

export default NavLinks;
