// Requirements
const mongoose = require("mongoose");

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
