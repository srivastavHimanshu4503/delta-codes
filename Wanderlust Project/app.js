const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");

const app = express();
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

app.listen(PORT, () => {
  console.log("Server is listing at port: ", PORT);
});

async function main() {
  await mongoose.connect(MONGO_URL);
};

main()
  .then(() => {
    console.log("DB Connection Established!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

app.get("/listings", async (req, res) => {
  let allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
})

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id);
  res.render("listings/show.ejs", { list });
});

app.post("/listings", async (req, res) => { 
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

