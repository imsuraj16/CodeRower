const mongoose = require("mongoose");

const configurationSchema = new mongoose.Schema({
  configId: { type: String, required: true },
  data: { type: [[String]], default: [] },
  remark: { type: String, default: "" }
}, {
  timestamps: true,
  collection: "configurations"
});

module.exports = mongoose.model("Configuration", configurationSchema);
