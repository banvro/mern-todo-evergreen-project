const mongoose = require("mongoose");

mongoose
  .connect("mongodb://eeee:eeee@195.35.20.80:27017/todoforserver?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
