const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

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
    initData.data = initData.data.map((obj) => {
      return {...obj, owner: "687659e44c5bf0e797de0b56"};
    });
    await Listing.insertMany(initData.data);
    console.log("Data initialized successfully.");
}

initDB();