const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leadSchema = new Schema({
    name: { type: String, required: true },
    company: { type: String, requiured: true },
    domain: { type: String, required: true },
    conversionStatus: { type: Boolean, required: true },
    broadcastStatus: { type: Boolean, required: true },
    createdBy: { type: String, required: true },
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;