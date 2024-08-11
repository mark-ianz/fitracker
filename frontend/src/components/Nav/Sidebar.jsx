// Dependencies
import { Link } from "react-router-dom";

// Components
import NavLinks from "./NavLinks";
import useSidebarContext from "../../utils/hooks/useSidebarContext";

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebarContext();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed navbar-popup flex bg-gray-50 top-0 left-0 bottom-0 z-10 items-center justify-start w-full max-w-md flex-col py-20">
        <img
          src="/close-button.png"
          alt="Close Sidebar"
          className="icons absolute right-4 top-4 cursor-pointer"
          onClick={closeSidebar}
        />
        <Link to={"/"} id="title" className="font-lalezar text-6xl text-black">
          FITRACKER
        </Link>

        <div className="border-b-[1px] border-gray-400 w-5/6 my-4"></div>

        <NavLinks className={"flex-col h-fit w-full lg:hidden gap-4"} />
      </div>

      <div
        className={`modal-background fixed bg-black opacity-10 top-0 right-0 left-0 bottom-0 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
