import BackButton from "../components/BackButton";
import Button from "../components/Button";
import LineSeperator from "../components/LineSeperator";
import Program from "../components/Splits/Program";

const CreateSplit = () => {
  return (
    <main className="flex items-center justify-center">
      <section
        className="flex flex-col w-full max-w-screen-sm border
        border-gray-100 rounded-xl p-10 bg-white shadow-md max-md:px-[5vw]"
      >
        <div className="flex gap-2">
          <BackButton />
          <h1 className="text-xl font-bold">Create Split</h1>
        </div>
        <LineSeperator className={"my-4"} />
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="text-input"
              placeholder='(e.g, "PPL", "Bro Split", "Upper Lower")'
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="text-input"
              placeholder="(Optional)"
            />
          </div>
          <Program />
          <div className="flex gap-2 items-center justify-end">
            <Button buttonType={"secondary"}>
              Cancel
            </Button>
            <Button buttonType={"primary"}>
              Submit
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateSplit;
/* {
  "title": "PPL x Arnold Split",
  "description": "A hybrid of the Push/Pull/Legs split and Arnold Schwarzenegger's high-volume training principles. This split focuses on comprehensive muscle development with high volume and intensity.",
  "programs": [
    {
        "programName": "Push Day",
        "muscleTargets": "Chest, Shoulders, Triceps",
        "programDescription": "Focuses on pushing movements to develop the chest, shoulders, and triceps with a mix of compound and isolation exercises.",
        "exercises": [
            {
                "exerciseName": "Bench Press"
            },
            {
                "exerciseName": "Incline Dumbbell Press"
            },
            {
                "exerciseName": "Overhead Press"
            },
            {
                "exerciseName": "Lateral Raise"
            },
            {
                "exerciseName": "Tricep Dips"
            },
            {
                "exerciseName": "Tricep Pushdown"
            }
        ]
    },
  ]
} */
