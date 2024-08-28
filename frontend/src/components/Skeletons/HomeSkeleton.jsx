import React from "react";
import Skeleton from "react-loading-skeleton";

const HomeSkeleton = ({ size }) => {
  const skeletons = Array.from({ length: size });
  return (
    <ul className="flex flex-col gap-4">
      {skeletons.map((_, index) => (
        <li
          key={index}
          className="min-h-48 rounded-md border-gray border-solid border p-6 flex flex-col gap-6"
        >
          <div className="flex justify-between items-center  flex-wrap">
            <Skeleton width={150} className="h-6" />
            <Skeleton width={250}/>
          </div>
          <div className="flex flex-col">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeSkeleton;
