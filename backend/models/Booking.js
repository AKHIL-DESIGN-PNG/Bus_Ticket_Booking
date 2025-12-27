// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//     userId: String,
//     busId: String,
//     seats: [Number],
//     amount: Number,
//     status: String
// });

// module.exports = mongoose.model("Booking", bookingSchema);
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
