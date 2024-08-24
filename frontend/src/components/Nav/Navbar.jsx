// Providers
import NavLinks from "./NavLinks";
import Title from "./Title";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container flex flex-row justify-between align-middle text-gray-600 shadow-md p-4 bg-white max-[845px]:flex-col max-[845px]:gap-2 z-10">
        <Title />
        <NavLinks />
      </nav>
    </>
  );
};

export default Navbar;
