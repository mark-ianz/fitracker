import React from "react";
import LeftContainer from "./LeftContainer";
import NavLinks from "./NavLinks";
import useAuthContext from "../../utils/hooks/useAuthContext";
import useModalContext from "../../utils/hooks/useModalContext";
import LoginForm from "../LoginForm";
import Button from "../Button";
import useLogout from "../../utils/hooks/useLogout";

const MainNav = () => {
  const logout = useLogout();
  const { isAuth } = useAuthContext();
  const { openModal } = useModalContext();

  return (
    <>
      <LeftContainer />

      <NavLinks className={"justify-between max-lg:hidden w-[40%]"} />

      {!isAuth ? (
        <Button
          buttonType="primary"
          className={"max-xsm:hidden"}
          onClick={() => {
            openModal(<LoginForm />);
          }}
        >
          Login
        </Button>
      ) : (
        <Button
          buttonType="primary"
          className={"max-xsm:hidden"}
          onClick={logout}
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default MainNav;
