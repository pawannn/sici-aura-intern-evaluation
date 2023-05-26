const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobsSchema = Schema({
    role: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    minexp: {
        type: String,
        required: true,
    },
    maxexp: {
        type: String,
        required: true,
    }
});

const Jobs = mongoose.model('jobs', jobsSchema);

module.exports = Jobs;