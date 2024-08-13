import ProgramsList from "../components/Programs/ProgramsList";

const Programs = () => {
  // List of Splits
  // Every card has a "view button"

 

  return (
    <main>
      <h1 className="text-3xl font-bold">Recommended Programs</h1>
      <div className="border-b-[1px] my-4"></div>
      <ProgramsList />
    </main>
  );
};

export default Programs;
