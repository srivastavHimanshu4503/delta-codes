const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");
const data = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("DB Connection Established!");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data initialized successfully.");
}

initDB();