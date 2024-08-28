import Skeleton from "react-loading-skeleton";

const TestSkeleton = ({ size }) => {
  const skeletons = Array.from({ length: size });
  return (
    <div className="grid gap-4 grid-cols-5">
      {skeletons.map((_, index) => (
        <Skeleton key={index} className="min-h-56"/>
      ))}
    </div>
  );
};

export default TestSkeleton;
