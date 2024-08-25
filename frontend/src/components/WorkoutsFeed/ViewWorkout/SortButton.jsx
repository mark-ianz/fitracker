import { capitalizeFirstChar, formatPosessive } from "../../../utils/helper";
import useAuthContext from "../../../utils/hooks/useAuthContext";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const SortButton = ({ setSort }) => {
  const { username } = useAuthContext();
  const formattedUsername = formatPosessive(capitalizeFirstChar(username));
  const navigate = useNavigate();

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="mb-4 flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
      <p className="text-2xl">
        <span className="font-bold">{formattedUsername}</span> Workout History
      </p>
      <div className="flex content-center gap-2 flex-wrap">
        <select
          className="border rounded-md px-4 py-2"
          onChange={handleSortChange}
        >
          <option value={""}>Sort By</option>
          <option value={"date"}>Date</option>
          <option value={"exercisesPerformed"}>Exercises Performed</option>
        </select>
        <Button buttonType={"primary"} onClick={() => navigate("/create")}>
          Log workout
        </Button>
      </div>
    </div>
  );
};

export default SortButton;
