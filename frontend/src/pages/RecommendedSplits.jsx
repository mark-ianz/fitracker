import SplitsList from "../components/Splits/SplitsList";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import useAuthContext from "../utils/hooks/useAuthContext";
import splitsAPI from "../utils/api/splits";
import LineSeperator from "../components/LineSeperator";
import SplitCardSkeleton from "../components/Skeletons/SplitCardSkeleton";

const RecommendedSplits = () => {
  const { token } = useAuthContext();
  const [splits, setSplits] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSplits = async () => {
      try {
        setLoading(true);
        const { data } = await splitsAPI.get("/recommended");
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
    <section>
      <div className="flex gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Recommended Splits</h1>
      </div>
      <LineSeperator className={"my-4"} />
      {splits && <SplitsList splits={splits} />}
      {loading && <SplitCardSkeleton size={5} />}
      {error && <p>{error}</p>}
    </section>
  );
};

export default RecommendedSplits;
