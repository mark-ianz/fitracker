// Dependencies
import { Outlet } from "react-router-dom";

// Components

// Pages
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-50 flex-col flex px-[3vh] py-[3vh] max-sm:px-4 max-sm:py-4 w-full">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
