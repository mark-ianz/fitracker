// Dependencies
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const MongoDBSession = require("connect-mongodb-session")(session);
const cors = require("cors");
require("dotenv").config();

// Routes
const workoutRoutes = require("./routes/workoutRoute.js");
const userRoutes = require("./routes/userRoutes.js");

// Start server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
// Invoke server
startServer();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://fitracker-app.netlify.app/", "http://localhost:3000"],
    credentials: true,
  })
);

// Cookies and Session
app.use(cookieParser());
/* const store = new MongoDBSession({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
    store: store,
  })
); */

// Landing Route
app.get("/", (req, res) => {
  res.json({ message: "Landing Page!" });
});

// Workout Routes
app.use("/api/workouts", workoutRoutes);

// User Routes
app.use("/api/users", userRoutes);

// Errors
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});
