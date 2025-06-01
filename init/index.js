const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Define the function BEFORE using it
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner: "683884b8a5148f7ee1959a93",
    }))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}

main().then(() => {
    initDB(); // Now it works because it's defined above
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
});
