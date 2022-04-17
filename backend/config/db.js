const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log(`MongoDB connect: ${con.connection.host}`.blue.underline);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = {
  dbConnection,
};
