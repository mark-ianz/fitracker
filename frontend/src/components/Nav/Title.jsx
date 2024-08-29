import { Link } from "react-router-dom";

const Title = ({ className }) => {
  return (
    <div
      className={`text-4xl text-red-400 left-container flex flex-row align-middle justify-center pt-[.2em] ${className}`}
    >
      <Link to={"/"} id="title" className="font-lalezar">
        FITRACKER
      </Link>
    </div>
  );
};

export default Title;
