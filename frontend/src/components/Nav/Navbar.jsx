// Dependencies
import { useEffect } from "react";

// Components
import Sidebar from "./Sidebar";

// Providers
import MainNav from "./MainNav";

const Navbar = () => {
  /* useEffect(() => {
    window.addEventListener("resize", closeSidebar);

    return () => {
      window.removeEventListener("resize", closeSidebar);
    };
  }, []); */

  return (
    <>
      <nav className="nav-container flex flex-row justify-between align-middle text-gray-600 shadow-md p-4 bg-white max-[845px]:flex-col max-[845px]:gap-2">
        <MainNav />
        <Sidebar />
      </nav>
    </>
  );
};

export default Navbar;
