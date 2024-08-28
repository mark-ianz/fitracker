import Skeleton from "react-loading-skeleton";

const SplitCardSkeleton = ({ size }) => {
  const skeleton = Array.from({ length: size });
  return (
    <ul className="grid grid-cols-5 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[470px]:grid-cols-1">
      {skeleton.map((_, index) => (
        <li key={index} className="p-4 shadow-md border-solid border rounded-md min-h-52">
          <Skeleton height={25} className="mb-5"/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
        </li>
      ))}
    </ul>
  );
};

export default SplitCardSkeleton;
