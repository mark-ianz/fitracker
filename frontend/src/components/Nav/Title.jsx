import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="left-container flex flex-row align-middle justify-center">
      <Link
        to={"/"}
        id="title"
        className="font-lalezar text-4xl text-red-400"
      >
        FITRACKER
      </Link>
    </div>
  );
};

export default Title;
