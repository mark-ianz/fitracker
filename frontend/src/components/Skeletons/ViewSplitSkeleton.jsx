import React from "react";
import Skeleton from "react-loading-skeleton";

const ViewSplitSkeleton = ({ size }) => {
  const skeletons = Array.from({ length: size });
  return (
    <>
      <div>
        <Skeleton height={30} width={200} />
        <Skeleton className="mt-4" />
        <Skeleton className="mb-4"/>
      </div>
      <ul className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {skeletons.map((_, index) => (
          <li key={index} className="shadow-md p-4 border-solid border rounded-md relative pb-24 min-h-96">
            <Skeleton height={25} width={150} />
            <Skeleton width={200} />
            <Skeleton className="mt-4" />
            <Skeleton />
            <Skeleton />
            <Skeleton className="mt-4" width={100} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <div className="flex justify-end absolute bottom-4 right-4">
              <Skeleton width={80} height={40}/>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ViewSplitSkeleton;
