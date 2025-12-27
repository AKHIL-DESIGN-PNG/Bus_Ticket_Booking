const express = require("express");
const Bus = require("../models/Bus");
const router = express.Router();

router.post("/add-bus", async (req, res) => {
    const seats = Array.from(
        { length: req.body.totalSeats },
        (_, i) => i + 1
    );

    const bus = new Bus({
        busName: req.body.busName,
        source: req.body.source,
        destination: req.body.destination,
        totalSeats: req.body.totalSeats,
        availableSeats: seats
    });

    await bus.save();
    res.send("Bus added successfully");
});

router.get("/buses", async (req, res) => {
    const buses = await Bus.find();
    res.json(buses);
});
router.get("/bus/:id", async (req, res) => {
    const bus = await Bus.findById(req.params.id);
    res.json(bus);
});

module.exports = router;
