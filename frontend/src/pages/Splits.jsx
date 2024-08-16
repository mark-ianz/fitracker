import SplitsList from "../components/Splits/SplitsList";
import BackButton from "../components/BackButton"

const Splits = () => {
  // List of Splits
  // Every card has a "view button"

  return (
    <main>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-3xl font-bold">Recommended Splits</h1>
      </div>
      <div className="border-b-[1px] my-4"></div>
      <SplitsList />
    </main>
  );
};

export default Splits;
