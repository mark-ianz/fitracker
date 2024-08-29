import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../utils/hooks/useAuthContext";
import LoginForm from "./Forms/LoginForm";
import Signup from "./Forms/SignupForm";
import Button from "./Button";
import useModalContext from "../utils/hooks/useModalContext";
import useLogout from "../utils/hooks/useLogout";

const Footer = () => {
  const { isAuth } = useAuthContext();
  const { openModal } = useModalContext();
  const logout = useLogout();

  return (
    <>
      <footer className="flex flex-col justify-center items-center gap-4 mt-40 text-gray-600">
        <ul className="flex flex-row justify-between w-full max-w-[400px] max-xsm:flex-col max-xsm:items-center max-xsm:gap-2">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to={"/splits"}>Splits</Link>
          </li>
          {!isAuth ? (
            <>
              <Button
                buttonType="plain"
                className={"w-fit text-inherit"}
                onClick={() => {
                  openModal(<LoginForm />);
                }}
              >
                Login
              </Button>
              <Button
                buttonType="plain"
                className={"w-fit text-inherit"}
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
              className={"w-fit text-inherit"}
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </ul>
        <p className="copyright">Fitracker © 2024</p>
      </footer>
    </>
  );
};

export default Footer;
