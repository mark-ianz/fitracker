// Providers
import { useState } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import NavLinks from "./NavLinks";
import Title from "./Title";
import Close from "../Icons/Close";

const Navbar = ({ isLandingPage }) => {
  const className = isLandingPage
    ? "flex flex-row justify-between align-middle text-white p-10"
    : "flex flex-row justify-between align-middle text-gray-600 shadow-md p-4 bg-white";

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav
        className={`${className} max-md:flex-col max-sm:flex-row max-sm:justify-start max-sm:p-6`}
      >
        <HamburgerMenu
          className={`w-8 mr-2 sm:hidden`}
          stroke={!isLandingPage && "#b1b1b1"}
          onClick={() => setSidebarOpen(true)}
        />
        <Title className={"max-sm:grow"} />

        {/* Navlinks */}
        <ul
          className={`nav-links flex items-center max-md:justify-between max-md:mt-4 z-50
          max-sm:text-gray-600 max-sm:bg-gray-100 max-sm:mt-0 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:bottom-0 max-sm:flex-col max-sm:max-w-md max-sm:justify-start max-sm:gap-4 max-sm:pt-16 max-sm:transition-all max-sm:-translate-x-full ${
            sidebarOpen && "max-sm:translate-x-0"
          }`}
        >
          <Close
            fill={"#b1b1b1"}
            className={"hidden max-sm:block absolute top-4 right-4"}
            onClick={() => setSidebarOpen(false)}
          />
          <Title className={"hidden max-sm:block"} />
          <NavLinks />
          <p className="fixed bottom-4 hidden max-sm:block">Fitracker © 2024</p>
        </ul>

        {/* Modal Background */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`${
            sidebarOpen ? "block" : "hidden"
          } fixed top-0 right-0 left-0 bottom-0 bg-black opacity-10`}
        ></div>
      </nav>
    </>
  );
};

export default Navbar;

//
