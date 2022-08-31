const mongoose = require("mongoose");
//create a function to export when done and call it in server.js
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`); //console log to tell us what cluster we are connected to.
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB; //allows us to be able to export this
