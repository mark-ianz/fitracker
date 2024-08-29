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
    <>
      <li className="min-w-fit flex align-middle justify-center px-4">
        <NavLink
          to="/"
          className="px-3 py-1 border-b-[1px] border-transparent text-center hover:text-red-400 transition-all max-[320px]:p-1"
        >
          Home
        </NavLink>
      </li>
      {isAuth && (
        <>
          <li className="min-w-fit flex align-middle justify-center px-4">
            <NavLink
              to="/history"
              className="px-3 py-1 border-b-[1px] border-transparent text-center hover:text-red-400 transition-all max-[320px]:p-1"
            >
              History
            </NavLink>
          </li>
          <li className="min-w-fit flex align-middle justify-center px-4">
            <NavLink
              to="/create"
              className="px-3 py-1 border-b-[1px] border-transparent text-center hover:text-red-400 transition-all max-[320px]:p-1"
            >
              Create
            </NavLink>
          </li>
        </>
      )}

      <li className="min-w-fit flex align-middle justify-center px-4">
        <NavLink
          to="/splits"
          className="px-3 py-1 border-b-[1px] border-transparent text-center hover:text-red-400 transition-all max-[320px]:p-1"
        >
          Splits
        </NavLink>
      </li>
      {!isAuth ? (
        <>
          <Button
            buttonType="plain"
            className={"text-inherit px-4"}
            onClick={() => {
              openModal(<LoginForm />);
            }}
          >
            Login
          </Button>
          <Button
            buttonType="plain"
            className={"text-inherit px-4"}
            onClick={() => {
              openModal(<Signup />);
            }}
          >
            Signup
          </Button>
        </>
      ) : (
        <Button
          buttonType="plain"
          className={"text-inherit px-4"}
          onClick={logout}
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default NavLinks;
