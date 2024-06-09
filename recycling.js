const express = require('express');
const Recycling = require('../models/recycling');
const router = express.Router();

// Create a new recycling entry
router.post('/recycling', async (req, res) => {
    const recycling = new Recycling(req.body);
    await recycling.save();
    res.send(recycling);
});

// Get all recycling entries
router.get('/recycling', async (req, res) => {
    const recyclings = await Recycling.find();
    res.send(recyclings);
});

// Generate a report
router.get('/report', async (req, res) => {
    const recyclings = await Recycling.aggregate([
        { $group: { _id: "$user", totalAmount: { $sum: "$amount" }, totalEarnings: { $sum: "$earnings" } } }
    ]);
    res.send(recyclings);
});

module.exports = router;