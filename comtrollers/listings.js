const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

module.exports.showDetails = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res, next) => {
  try {
    const url = req.file.path;
    const filename = req.file.filename;
    const { title, description, image, price, country, location } = req.body;
    const newListing = new Listing({
      title,
      description,
      image,
      price,
      country,
      location,
    });
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing
      .save()
      .then(() => {
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    req.flash("error", `${err.message}`);
    res.redirect("/listings/new");
  }
};

module.exports.updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, location, country } = req.body;
    const updateData = {
      title,
      description,
      price,
      location,
      country,
    };
    if (req.file) {
      const url = req.file.path;
      const filename = req.file.filename;
      updateData.image = {url , filename};
    }
    await Listing.findByIdAndUpdate(id, updateData, { new: true });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("Error updating listing:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "One Listing Deleted");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/edit", { listing });
};
