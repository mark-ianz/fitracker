import SplitsList from "../components/Splits/SplitsList";
import BackButton from "../components/BackButton"

const RecommendedSplits = () => {
  return (
    <section>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-2xl font-bold">Recommended Splits</h1>
      </div>
      <div className="border-b-[1px] my-4"></div>
      <SplitsList />
    </section>
  );
};

export default RecommendedSplits;
