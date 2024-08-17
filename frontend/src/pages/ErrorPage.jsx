import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <p className="text-xl">An unexpected error has been occured</p>
      <span className="flex flex-col justify-center items-center mt-2">
        <p className="font-bold text-9xl">{error.status}</p>
        <p className="font-bold text-4xl">{error.statusText}</p>
        <Link to={"/"} className="underline mt-4">Go back to home</Link>
      </span>
    </div>
  );
};

export default ErrorPage;
