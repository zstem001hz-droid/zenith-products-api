// Requirements
const mongoose = require("mongoose");

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Connection Events
const db = mongoose.connection;
db.on("error", (err) =>
  console.error("Database Error - check your Atlas connection: " + err.message),
);
db.on("connected", () => console.log("MongoDB is connected"));
db.on("disconnected", () => console.log("MongoDB is disconnected"));
