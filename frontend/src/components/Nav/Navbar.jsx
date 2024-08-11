// Dependencies
import { useEffect } from "react";

// Components
import Sidebar from "./Sidebar";

// Providers
import useSidebarContext from "../../utils/hooks/useSidebarContext";
import MainNav from "./MainNav";

const Navbar = () => {
  const { closeSidebar } = useSidebarContext();

  useEffect(() => {
    window.addEventListener("resize", closeSidebar);

    return () => {
      window.removeEventListener("resize", closeSidebar);
    };
  }, []);

  return (
    <>
      <nav className="nav-container flex flex-row justify-between align-middle text-gray-400">
        <MainNav/>
        <Sidebar />
      </nav>
    </>
  );
};

export default Navbar;
