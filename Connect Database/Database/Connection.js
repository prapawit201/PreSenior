const mongoose = require("mongoose");
const URI =
  "mongodb+srv://seniorobd2:seniorobd2@seniorproject-f0o8e.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("db connected ....!");
};

module.exports = connectDB;
