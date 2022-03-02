const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connector = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `DB connected: ${connector.connection.host}/${connector.connection.name}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
