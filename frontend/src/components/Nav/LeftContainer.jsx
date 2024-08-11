import { Link } from "react-router-dom";
import useSidebarContext from "../../utils/hooks/useSidebarContext";

const LeftContainer = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <div className="left-container flex flex-row align-middle justify-center">
      <img
        src="/hamburger-menu.png"
        alt="Hambuerger Menu"
        onClick={openSidebar}
        className="icons lg:hidden cursor-pointer"
      />
      <Link
        to={"/"}
        id="title"
        className="font-lalezar text-4xl max-lg:ml-4 text-black"
      >
        FITRACKER
      </Link>
    </div>
  );
};

export default LeftContainer;
