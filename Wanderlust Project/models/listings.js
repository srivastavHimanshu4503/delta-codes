const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1585171808765-f74d97158cb2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1585171808765-f74d97158cb2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
