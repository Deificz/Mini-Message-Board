const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery",false);

const mongoDB = process.env.DB_STRING;

const main = async () => {
    await mongoose.connect(mongoDB);
}

main().catch((err) => console.log(err));

module.exports = mongoose.connection;