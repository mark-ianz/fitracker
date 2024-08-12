// Dependencies
import { Outlet } from "react-router-dom";

// Components

// Pages
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="bg-gray-200 flex-col flex px-[5vh] py-[5vh] grow container-desktop max-sm:px-4 max-sm:py-4">
      <div className="bg-gray-50 flex flex-col px-[5vh] py-[3vh] grow max-lg:px-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
