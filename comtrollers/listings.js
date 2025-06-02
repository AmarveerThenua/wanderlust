const { cloudinary } = require("../cloudConfig");
const sharp = require("sharp");
const { Readable } = require("stream");
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

module.exports.createListing = async (req, res) => {
  try {
    const { title, description, price, location, country } = req.body;

    if (!req.file) {
      req.flash("error", "Please upload an image.");
      return res.redirect("/listings/new");
    }

    // 🔧 Compress to 85% quality and resize max width 1600px
    const compressedBuffer = await sharp(req.file.buffer)
      .resize({ width: 1600 }) // keep quality but reduce dimensions
      .jpeg({ quality: 85 })   // moderate compression
      .toBuffer();

    // 📤 Upload to Cloudinary
    const stream = Readable.from(compressedBuffer);
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "wanderlust_DEV",
        },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      stream.pipe(uploadStream);
    });

    // 📦 Save listing to DB
    const newListing = new Listing({
      title,
      description,
      price,
      location,
      country,
      owner: req.user._id,
      image: {
        url: result.secure_url,
        filename: result.public_id,
      },
    });

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    console.error("Error during listing creation:", err);
    req.flash("error", "Something went wrong while creating the listing.");
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
