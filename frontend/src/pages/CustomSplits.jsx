import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import SplitsList from "../components/Splits/SplitsList";
import splitsAPI from "../utils/api/splits";
import useAuthContext from "../utils/hooks/useAuthContext";

const CustomSplits = () => {
  const { token } = useAuthContext();
  const [splits, setSplits] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSplits = async () => {
      try {
        const { data } = await splitsAPI.get("/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        /* setSplits(data.splits); */
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      }
    };

    fetchSplits();
  }, [token]);

  return (
    <>
      <section>
        <div className="flex gap-2">
          <BackButton />
          <h1 className="text-2xl font-bold">Custom Splits</h1>
        </div>
        <div className="border-b-[1px] my-4"></div>
        {splits && <SplitsList splits={splits} canAddSplits={true}/>}
        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default CustomSplits;
