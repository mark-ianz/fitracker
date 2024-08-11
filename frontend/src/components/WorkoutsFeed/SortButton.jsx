import { useState } from "react";
import Button from "../Buttons/Button";

const SortButton = () => {
  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const openSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortClick = (sort) => {
    setSort(sort);
  };

  return (
    <div className="mb-7">
      <p className="text-2xl mb-2">Workout History</p>
      <div className="flex content-center">
        <div className="w-fit py-2 px-4 rounded-md cursor-pointer bg-gray-200 relative">
          <button className="text-gray-400" onClick={openSort}>
            Sort By: {sort} ▼
          </button>
          <ul
            className="absolute left-0 right-0 top-12 bg-gray-200 rounded-md"
            hidden={!isSortOpen}
          >
            <li
              onClick={() => {
                handleSortClick("name-asc");
              }}
              className="bg-gray-200 py-2 px-4 hover:bg-gray-400"
            >
              Name Asc
            </li>
            <li
              onClick={() => {
                handleSortClick("name-desc");
              }}
              className="bg-gray-200 py-2 px-4 hover:bg-gray-400"
            >
              Name Desc
            </li>
          </ul>
        </div>
        <Button buttonType={"primary"} className={"ml-2"} redirect={"/create"}>Log workout</Button>
      </div>
    </div>
  );
};

export default SortButton;
