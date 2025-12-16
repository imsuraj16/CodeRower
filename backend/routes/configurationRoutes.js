const express = require("express");
const router = express.Router();
const Configuration = require("../models/Configuration");

router.get("/configurations/:id", async (req, res) => {
  try {
    const config = await Configuration.findOne({ configId: req.params.id });

    if (!config || !Array.isArray(config.data)) {
      return res.status(404).json({ message: "2D array not found." });
    }

    return res.json(config.data);
  } catch (err) {
    console.error("GET error:", err.message);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

router.put("/configurations/:id", async (req, res) => {
  try {
    const updated = await Configuration.findOneAndUpdate(
      { configId: req.params.id },
      { $set: { remark: req.body.remark } },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Configuration not found." });
    }

    return res.json({ message: "success" });
  } catch (err) {
    console.error("PUT error:", err.message);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

module.exports = router;
