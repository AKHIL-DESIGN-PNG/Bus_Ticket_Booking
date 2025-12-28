const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: String,
  busName: String,
  from: String,
  to: String,
  seats: [String],
  amount: Number,
  paymentId: String,
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
