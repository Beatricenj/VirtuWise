const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  type: { type: String, enum: ['academic', 'virtual', 'custom'], required: true },
  name: String,
  email: String,
  subject: String,
  helpType: String,
  description: String,
  dueDate: String,
  urgency: String,
  service: String,
  preferredDate: String,
  preferredTime: String,
  duration: String,
  contactMethod: String,
  needs: String,
  request: String, // for custom
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);
