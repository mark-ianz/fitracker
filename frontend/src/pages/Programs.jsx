import ProgramsList from "../components/Programs/ProgramsList";
import BackButton from "../components/BackButton"

const Programs = () => {
  // List of Splits
  // Every card has a "view button"

  return (
    <main>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-3xl font-bold">Recommended Programs</h1>
      </div>
      <div className="border-b-[1px] my-4"></div>
      <ProgramsList />
    </main>
  );
};

export default Programs;
