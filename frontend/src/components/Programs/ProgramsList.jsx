import React, { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";
import useAuthContext from "../../utils/hooks/useAuthContext";

const ProgramsList = () => {
  const { token } = useAuthContext();
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/programs/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (!response.ok) {
          throw Error(result.error);
        }

        setPrograms(result.programs);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [token]);

  return (
    <ul className="grid grid-cols-5 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[470px]:grid-cols-1">
      {programs.length > 0 &&
        programs.map((program) => {
          return <ProgramCard key={program._id} program={program} />;
        })}
    </ul>
  );
};

export default ProgramsList;
