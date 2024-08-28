import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import SplitsList from "../components/Splits/SplitsList";
import splitsAPI from "../utils/api/splits";
import useAuthContext from "../utils/hooks/useAuthContext";
import LineSeperator from "../components/LineSeperator";
import SplitCardSkeleton from "../components/Skeletons/SplitCardSkeleton";

const CustomSplits = () => {
  const { token } = useAuthContext();
  const [splits, setSplits] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSplits = async () => {
      try {
        setLoading(true);
        const { data } = await splitsAPI.get("/user", {
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
      } finally {
        setLoading(false);
      }
    };

    fetchSplits();
  }, [token]);

  return (
    <>
      <section>
        <div className="flex gap-2">
          <BackButton />
          <h1 className="text-xl font-bold">Custom Splits</h1>
        </div>
        <LineSeperator className={"my-4"} />
        {!loading && <SplitsList splits={splits} canAddSplits={true} />}
        {loading && <SplitCardSkeleton size={10} />}
        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default CustomSplits;
