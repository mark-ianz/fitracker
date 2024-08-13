import { useState } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const SortButton = () => {
  const navigate = useNavigate();

  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const openSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortClick = (sort) => {
    setSort(sort);
  };

  return (
    <div className="mb-4 flex justify-between items-center max-[550px]:flex-col  max-[550px]:items-start gap-2">
      <p className="text-2xl font-bold">Workout History</p>
      <div className="flex content-center gap-2 max-[330px]:flex-col ">
        <select className="border rounded-lg px-4 py-2">
          <option>Sort By</option>
          <option>Date</option>
          <option>Workout Type</option>
        </select>
        <Button
          buttonType={"primary"}
          onClick={() => navigate("/create")}
        >
          Log workout
        </Button>
      </div>
    </div>
  );
};

export default SortButton;
