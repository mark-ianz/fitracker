import { generate_uuid } from "./helper";

export const features = [
  {
    id: generate_uuid(),
    title: "Workout Session Logging",
    description:
      "Easily log your workout sessions by entering details such as the session name, description, location, date, and tags.",
  },
  {
    id: generate_uuid(),
    title: "Exercise Input",
    description:
      "Input the exercises you performed during your session, including sets, reps, and weights.",
  },
  {
    id: generate_uuid(),
    title: "Account-Based Access",
    description:
      "Each user has their own account, ensuring that you can only see and manage your workout sessions.",
  },
  {
    id: generate_uuid(),
    title: "Recommended Workout Splits",
    description:
      "Browse through a variety of recommended workout splits tailored to different fitness goals.",
  },
  {
    id: generate_uuid(),
    title: "One-Click Split Logging",
    description:
      "Log a recommended workout split with a single click, automatically filling in the exercises with adjustable sets and reps.",
  },
  {
    id: generate_uuid(),
    title: "Custom Workout Splits",
    description:
      "Create and save your own workout splits, tailored to your unique fitness goals and preferences.",
  },
];
