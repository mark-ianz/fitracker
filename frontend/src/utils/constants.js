import { generate_uuid } from "./helper";

/* export const features = [
  {
    id: generate_uuid(),
    title: "Workout Session Logging",
    description:
      "Easily log your workout sessions by entering details such as the session name, description, location, date, and tags.",
  },
  {
    id: generate_uuid(),
    title: "Account-Based Access",
    description:
      "Each user has their own account, ensuring that you can only see and manage your workout sessions.",
  },
  {
    id: generate_uuid(),
    title: "One-Click Split Logging",
    description:
      "Log a recommended workout split with a single click, automatically filling in the exercises with adjustable sets and reps.",
  },
  {
    id: generate_uuid(),
    title: "Recommended Workout Splits",
    description:
      "Browse through a variety of recommended workout splits tailored to different fitness goals.",
  },
  {
    id: generate_uuid(),
    title: "Exercise Input",
    description:
      "Input the exercises you performed during your session, including sets, reps, and weights.",
  },
  {
    id: generate_uuid(),
    title: "Custom Workout Splits",
    description:
      "Create and save your own workout splits, tailored to your unique fitness goals and preferences.",
  },
]; */

export const features = [
  {
    id: generate_uuid(),
    title: "Track Every Detail of Your Workout",
    description:
      "Effortlessly log every aspect of your workout sessions. Whether it’s the exercises performed, the number of sets, reps, or the weights lifted, our platform makes it simple to capture and review your progress. Stay on top of your fitness goals by tracking your improvements over time, and never miss a detail of your fitness journey.",
    image: "/feature_1.png",
  },
  {
    id: generate_uuid(),
    title: "Secure and Personalized Experience",
    description:
      "Enjoy a secure and experience with our authentication system. Your data such as workout history and custom plans is protected and available only to you. Benefit from a seamless and synchronized experience as you work towards your fitness goals.",
    image: "/feature_2.png",
  },
  {
    id: generate_uuid(),
    title: "Create and Customize Your Ideal Workout Plan",
    description:
      "Design workout plans that fit your unique needs and preferences. Choose from expert-recommended splits or create your own custom routines, targeting specific muscle groups and fitness goals. Our interface allows you to easily adjust and refine your workouts, giving you the flexibility to train your way",
    image: "/feature_3.png",
    filter: true,
  },
];
