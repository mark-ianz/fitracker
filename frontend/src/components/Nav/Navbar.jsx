// Providers
import NavLinks from "./NavLinks";
import Title from "./Title";

const Navbar = ({ isLandingPage }) => {
  const className = isLandingPage
    ? "flex flex-row justify-between align-middle text-white p-10 max-[845px]:flex-col max-[845px]:gap-2 z-10"
    : "flex flex-row justify-between align-middle text-gray-600 shadow-md p-4 bg-white max-[845px]:flex-col max-[845px]:gap-2 z-10";

  return (
    <>
      <nav className={className}>
        <Title />
        <NavLinks />
      </nav>
    </>
  );
};

export default Navbar;
