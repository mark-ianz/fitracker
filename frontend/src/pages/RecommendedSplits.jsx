import SplitsList from "../components/Splits/SplitsList";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import useAuthContext from "../utils/hooks/useAuthContext";
import splitsAPI from "../utils/api/splits";
import LineSeperator from "../components/LineSeperator";

const RecommendedSplits = () => {
  const { token } = useAuthContext();
  const [splits, setSplits] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSplits = async () => {
      try {
        const { data } = await splitsAPI.get("/all", {
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

    fetchSplits();
  }, [token]);

  return (
    <section>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Recommended Splits</h1>
      </div>
      <LineSeperator className={"my-4"}/>
      {splits && <SplitsList splits={splits} />}
      {error && <p>{error}</p>}
    </section>
  );
};

export default RecommendedSplits;
