import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Splits = () => {
  return (
    <main className="flex items-center justify-center">
      <section className="flex flex-col justify-center items-center gap-4 mb-10 max-w-screen-lg">
        <div className="flex items-center justify-center mr-auto gap-2 mb-4">
          <BackButton />
          <p className="text-lg">Go Back</p>
        </div>
        <Link
          to={"recommended"}
          className="w-full p-4 shadow-md border-gray-200 border-solid border-[1px] rounded-md hover:scale-105 transition-all"
        >
          <p className="font-bold text-red-400 text-xl ">Recommended Splits</p>
          <p>
            A list of recommended splits that is used by many people and is
            proven to be effective for the muscle growth.
          </p>
        </Link>
        <Link
          to={"custom"}
          className="w-full p-4 shadow-md border-gray-200 border-solid border-[1px] rounded-md hover:scale-105 transition-all"
        >
          <p className="font-bold text-red-400 text-xl ">Custom Splits</p>
          <p>View the list that you created.</p>
        </Link>
      </section>
    </main>
  );
};

export default Splits;
