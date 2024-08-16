import React, { useEffect, useState } from "react";
import useAuthContext from "../../utils/hooks/useAuthContext";
import SplitCard from "./SplitCard";
import axios from "axios";

const SplitsList = () => {
  const { token } = useAuthContext();
  const [splits, setSplits] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/splits/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSplits(data.splits);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
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
