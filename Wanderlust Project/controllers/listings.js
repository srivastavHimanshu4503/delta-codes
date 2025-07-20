const Listing = require("../models/listings.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.showListing = async (req, res) => {
  let allListings = await Listing.find({}).populate("owner");
  res.render("listings/index.ejs", { allListings });
};

module.exports.createListingForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.detailedListingRoute = async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!list) {
    req.flash(
      "error",
      "Listing you want to access is either deleted or not created!"
    );
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { list });
};

module.exports.addListing = async (req, res) => {
  let { path: url, filename } = req.file;
  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing is created!");
  res.redirect("/listings");
};

module.exports.editListingForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you want to access does not exist!");
    return res.redirect("/listings");
  }
  let originalImageURl = listing.image.url;
  let updatedImgURL = originalImageURl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, updatedImgURL });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (req.file) {
    let { path: url, filename } = req.file;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing is updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  if (!id) {
    throw new ExpressError(404, "Listing Id not found");
  }
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    throw new ExpressError(404, "Listing not found");
  }
  console.log(deletedListing);
  req.flash("success", "Listing is deleted!");
  res.redirect("/listings");
};
