const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    busName: String,
    source: String,
    destination: String,
    totalSeats: Number,
    availableSeats: [Number]
});

module.exports = mongoose.model("Bus", busSchema);
