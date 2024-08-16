import React, { useEffect, useState } from "react";
import useAuthContext from "../../utils/hooks/useAuthContext";
import SplitCard from "./SplitCard";

const SplitsList = () => {
  const { token } = useAuthContext();
  const [splits, setSplits] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/splits/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (!response.ok) {
          throw Error(result.error);
        }

        setSplits(result.splits);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [token]);

  return (
    <ul className="grid grid-cols-5 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[470px]:grid-cols-1">
      {splits.length > 0 &&
        splits.map((split) => {
          return <SplitCard key={split._id} split={split} />;
        })}
    </ul>
  );
};

export default SplitsList;
