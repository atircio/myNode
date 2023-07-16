const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mynode.ojyuiyn.mongodb.net/?retryWrites=true&w=majority`,
    () => {
      console.log("Connected to MongoDB");
    }
  );
};

module.exports = connectToDataBase;
