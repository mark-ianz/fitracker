const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setSchema = new Schema({
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const exercisesPerformedSchema = new Schema({
  _id: false,
  id: {
    type: String,
    required: true,
  },
  exerciseName: {
    type: String,
    required: true,
  },
  sets: {
    _id: false,
    type: [setSchema],
    required: true,
  },
});

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    exercisesPerformed: {
      type: [exercisesPerformedSchema],
      required: true,
    },
    description: {
      type: String
    },
    user: {
      type: ObjectId,
      required: true,
    },
    tags: {
      type: String,
      default: "Workout",
    },
    location: {
      type: String,
      default: "Gym",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);

/*
  // Example Input
  {
    "message": "Post one workout",
    "body": {
        "name": "Push",
        "exercisesPerformed": [
            {
                "exerciseName": "Bench Press",
                "set": [
                    {
                        "reps": 10,
                        "duration": 67,
                        "weight": 200
                    },
                    {
                        "reps": 9,
                        "duration": 73,
                        "weight": 200
                    },
                    {
                        "reps": 6,
                        "duration": 45,
                        "weight": 200
                    }
                ]
            },
            {
                "workoutName": "Shoulder Press",
                "set": [
                    {
                        "reps": 10,
                        "duration": 60,
                        "weight": 68
                    },
                    {
                        "reps": 10,
                        "duration": 60,
                        "weight": 57
                    }
                ]
            },
            {
                "workoutName": "Tricep Pushdown",
                "set": [
                    {
                        "reps": 10,
                        "duration": 60,
                        "weight": 124
                    },
                    {
                        "reps": 10,
                        "duration": 60,
                        "weight": 124
                    }
                ]
            }
        ],
        "description": "The weather is quite cold today and I've got a solid breakfast with oats and boiled egg before workout.",
        "image": "https://fitnessvolt.com/wp-content/uploads/2023/11/sam-sulek-bulking-chest-side-delts-workout.jpg"
    }
}
*/
