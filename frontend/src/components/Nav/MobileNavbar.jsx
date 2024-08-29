import React, { useState } from "react";
import Title from "./Title";
import NavLinks from "./NavLinks";
import HamburgerMenu from "../Icons/HamburgerMenu";
import Close from "../Icons/Close";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((o) => !o);

  return (
    <nav className="flex justify-between align-middle text-white p-6 max-[845px]:flex-col z-10">
      <div className="flex justify-between items-center">
        <Title />
        <HamburgerMenu onClick={toggleNav} />
      </div>
      <ul
        className={`grid grid-cols-6 border-solid items-center text-inherit gap-4 min-w-fit max-sm:grid-cols-3 max-[345px]:gap-0 transition-all ease-in-out
        ${
          !isOpen
            ? "max-sm:-m-10 sm:-m-4 pointer-events-none opacity-0 -translate-y-full"
            : "translate-y-0"
        }`}
      >
        <NavLinks />
      </ul>
    </nav>
  );
};

export default MobileNavbar;
