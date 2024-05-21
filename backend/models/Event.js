const mongoose = require("mongoose");
const formSchema = mongoose.Schema({
  name: String,
  nParticipants: String,
  desc: String,
  date: String,
  timeIn: String,
  timeOut: String,
  venue: String,
  status: { type: String, enum: ['success', 'pending', 'denied'], default: 'pending' },
  refreshments: String,
});
module.exports = mongoose.model("Event", formSchema);