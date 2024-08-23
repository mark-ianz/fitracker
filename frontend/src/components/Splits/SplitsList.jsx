import AddMoreButton from "../WorkoutsFeed/Create/AddMoreButton";
import SplitCard from "./SplitCard";

const SplitsList = ({ splits, canAddSplits}) => {
  return (
    <>
      <ul className="grid grid-cols-5 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[470px]:grid-cols-1">
        {canAddSplits && <AddMoreButton className={"w-full max-md:col-span-2 max-md:py-6 max-[470px]:col-span-1 "}>Add Custom Splits</AddMoreButton>}
        {splits.length > 0 &&
          splits.map((split) => {
            return <SplitCard key={split._id} split={split} />;
          })}
      </ul>
    </>
  );
};

export default SplitsList;
