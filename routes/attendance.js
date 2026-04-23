const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// MARK ATTENDANCE
router.post("/mark", async (req, res) => {
  try {
    const { userId } = req.body;

    const attendance = new Attendance({
      userId,
      status: "Present"
    });

    await attendance.save();

    res.json({ message: "Attendance marked successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL
router.get("/all", async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});

module.exports = router;