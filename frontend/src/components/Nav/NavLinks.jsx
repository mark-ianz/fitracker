// Dependencies
import { NavLink } from "react-router-dom";
import useModalContext from "../../utils/hooks/useModalContext";

// Components
import Button from "../Button";
import Signup from "../Forms/SignupForm";
import LoginForm from "../Forms/LoginForm";
import useSidebarContext from "../../utils/hooks/useSidebarContext";
import useAuthContext from "../../utils/hooks/useAuthContext";
import useLogout from "../../utils/hooks/useLogout";

const NavLinks = ({ className }) => {
  const { openModal } = useModalContext();
  const { closeSidebar } = useSidebarContext();
  const { isAuth } = useAuthContext();
  const logout = useLogout();

  return (
    <ul
      className={`nav-links flex items-center min-w-fit ${className} text-xl text-gray-600`}
    >
      <li className="min-w-fit w-full flex align-middle justify-center">
        <NavLink to="/home" className="w-full px-4 py-2 text-center">
          Home
        </NavLink>
      </li>
      <li className="min-w-fit w-full flex align-middle justify-center">
        <NavLink to="/programs" className="w-full px-4 py-2 text-center">
          Programs
        </NavLink>
      </li>
      <li className="min-w-fit w-full flex align-middle justify-center">
        <NavLink to="/features" className="w-full px-4 py-2 text-center">
          Features
        </NavLink>
      </li>
      <li className="min-w-fit w-full flex align-middle justify-center">
        <NavLink to="/about" className="w-full px-4 py-2 text-center">
          About
        </NavLink>
      </li>
      {!isAuth ? (
        <>
          <li className="min-w-fit w-full flex align-middle justify-center lg:hidden">
            <button
              className="w-full px-4 py-2 text-center"
              onClick={() => {
                closeSidebar();
                openModal(<Signup />);
              }}
            >
              Signup
            </button>
          </li>
          <li className="min-w-fit flex align-middle justify-center lg:hidden">
            <button
              className="w-full px-4 py-2 text-center"
              onClick={() => {
                closeSidebar();
                openModal(<LoginForm />);
              }}
            >
              Login
            </button>
          </li>
        </>
      ) : (
        <li className="min-w-fit flex align-middle justify-center">
          <Button
            buttonType="primary"
            className={
              "text-xl py-2 rounded bg-opacity-0 text-inherit !text-gray-600 lg:hidden"
            }
            onClick={() => {
              closeSidebar();
              logout();
            }}
          >
            Logout
          </Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
