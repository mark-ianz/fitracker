import Skeleton from "react-loading-skeleton";
import ExercisesPerformedSkeleton from "../Skeletons/ExercisesPerformedSkeleton";

const ViewWorkoutSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between relative">
        <Skeleton width={150} height={20} />
        <Skeleton borderRadius={50} width={30} height={30} />
      </div>
      <div>
        <Skeleton width={250} />
        <Skeleton width={100} />
        <Skeleton width={90} />
        <Skeleton className="mt-4" />
        <Skeleton />
      </div>
      <div>
        <Skeleton height={30} width={185} />
      </div>
      <ExercisesPerformedSkeleton size={3}/>
    </div>
  );
};

export default ViewWorkoutSkeleton;
