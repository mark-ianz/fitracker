// Dependencies
import { NavLink } from "react-router-dom";
import useModalContext from "../../utils/hooks/useModalContext";

// Components
import Button from "../Buttons/Button";
import Signup from "../SignupForm";
import LoginForm from "../LoginForm";
import useSidebarContext from "../../utils/hooks/useSidebarContext";
import useAuthContext from "../../utils/hooks/useAuthContext";

const NavLinks = ({ className }) => {
  const { openModal } = useModalContext();
  const { closeSidebar } = useSidebarContext();
  const { isAuth } = useAuthContext();

  return (
    <ul
      className={`nav-links flex items-center min-w-fit ${className} text-xl text-gray-400`}
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
              "text-xl py-2 rounded bg-opacity-0 text-inherit !text-gray-400 lg:hidden"
            }
            onClick={() => {
              closeSidebar();
              console.log("Logged out!");
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
