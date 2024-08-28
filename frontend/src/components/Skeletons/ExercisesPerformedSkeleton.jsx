import React from "react";
import Skeleton from "react-loading-skeleton";

const ExercisesPerformedSkeleton = ({ size }) => {
  const skeletons = Array.from({ length: size });
  return (
    <ul className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-[470px]:grid-cols-1">
      {skeletons.map((_, index) => (
        <li key={index} className="relative border-solid border border-gray-100 rounded-md bg-white shadow-md p-4 min-h-64">
          <div className="flex justify-between items-center">
            <Skeleton width={100} height={20} />
            <Skeleton width={50} />
          </div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton className="mt-24"/>
        </li>
      ))}
    </ul>
  );
};

export default ExercisesPerformedSkeleton;
