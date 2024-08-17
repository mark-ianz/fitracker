// Dependencies
import { NavLink } from "react-router-dom";
import useModalContext from "../../utils/hooks/useModalContext";

// Components
import Button from "../Button";
import LoginForm from "../Forms/LoginForm";
import useAuthContext from "../../utils/hooks/useAuthContext";
import useLogout from "../../utils/hooks/useLogout";
import Signup from "../Forms/SignupForm";

const NavLinks = () => {
  const { openModal } = useModalContext();
  const { isAuth } = useAuthContext();
  const logout = useLogout();

  return (
    <ul
      className={`nav-links grid grid-cols-6 max-sm:grid-cols-3 items-center text-gray-600 gap-4 min-w-fit max-[345px]:gap-0`}
    >
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/home"
          className="px-3 py-1 text-center hover:text-red-400 transition-all max-[320px]:p-1"
        >
          Home
        </NavLink>
      </li>
      {isAuth && (
        <li className="min-w-fit flex align-middle justify-center grow">
          <NavLink
            to="/create"
            className="px-3 py-1 text-center hover:text-red-400 transition-all max-[320px]:p-1"
          >
            Create
          </NavLink>
        </li>
      )}
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/splits"
          className="px-3 py-1 text-center hover:text-red-400 transition-all max-[320px]:p-1"
        >
          Splits
        </NavLink>
      </li>
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/features"
          className="px-3 py-1 text-center hover:text-red-400 transition-all max-[320px]:p-1"
        >
          Features
        </NavLink>
      </li>
      <li className="min-w-fit flex align-middle justify-center grow">
        <NavLink
          to="/about"
          className="px-3 py-1 text-center hover:text-red-400 transition-all max-[320px]:p-1"
        >
          About
        </NavLink>
      </li>
      {!isAuth ? (
        <>
          <Button
            buttonType="plain"
            className={"grow"}
            onClick={() => {
              openModal(<LoginForm />);
            }}
          >
            Login
          </Button>
          <Button
            buttonType="plain"
            className={"grow"}
            onClick={() => {
              openModal(<Signup />);
            }}
          >
            Signup
          </Button>
        </>
      ) : (
        <Button buttonType="plain" className={"grow"} onClick={logout}>
          Logout
        </Button>
      )}
    </ul>
  );
};

export default NavLinks;
