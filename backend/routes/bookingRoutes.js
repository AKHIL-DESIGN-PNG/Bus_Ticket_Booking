const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const Booking = require("../models/Booking");
const Bus = require("../models/Bus");
const generateTicket = require("../utils/generateTicket");

const router = express.Router();

/* ---------------- RAZORPAY INSTANCE ---------------- */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/* ---------------- CREATE ORDER ---------------- */
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay works in paise
      currency: "INR",
      receipt: "bus_ticket_receipt"
    });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

/* ---------------- VERIFY PAYMENT ---------------- */
router.post("/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userName,
      busName,
      from,
      to,
      seats,
      amount
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    // Save booking
    const booking = await Booking.create({
      userName,
      busName,
      from,
      to,
      seats,
      amount,
      paymentId: razorpay_payment_id,
      status: "Confirmed"
    });

    // Generate ticket PDF
    generateTicket(booking);

    res.json({
      success: true,
      bookingId: booking._id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

/* ---------------- GET ALL BOOKINGS (ADMIN) ---------------- */
router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

module.exports = router;
