import React from "react";
import BackButton from "../components/BackButton";
import LineSeperator from "../components/LineSeperator";

const CreateSplit = () => {
  return (
    <main>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Create Split</h1>
      </div>
      <LineSeperator className={"my-4"} />
      <form></form>
    </main>
  );
};

export default CreateSplit;
