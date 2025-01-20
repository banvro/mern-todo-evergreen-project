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
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/api", routes);

// Start Server
app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
