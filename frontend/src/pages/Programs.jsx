import ProgramsList from "../components/Programs/ProgramsList";

const Programs = () => {
  // List of Splits
  // Every card has a "view button"

  return (
    <div>
      <h1 className="text-xl font-bold">Recommended Programs</h1>
      <div className="border-b-[1px] my-4"></div>
      <ProgramsList />
    </div>
  );
};

export default Programs;
