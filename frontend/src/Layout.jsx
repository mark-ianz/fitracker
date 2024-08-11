// Dependencies
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Nav/Navbar";

// Pages
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-200 flex-col flex px-[5vh] py-[5vh] grow container-desktop max-sm:px-4 max-sm:py-4">
      <div className="bg-gray-50 flex flex-col px-[5vh] py-[3vh] grow max-lg:px-6">
        <header className="mb-[10vh] max-lg:mb-[5vh]">
          <Navbar />
        </header>
        <Outlet /> {/* <main></main> */}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
