const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://eeee:eeee@127.0.0.1:27017/todoforserver?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });


// Log MongoDB connection errors
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.use("/api", routes);

// Start Server
app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
