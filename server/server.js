const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));

mongoose.connect(process.env.dbURI)
    .then(() => {
        console.log('connected');
    })
    .catch((err) => {
        console.log(err);
    });

PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('listening on port 3000...');
});

app.get('/jobs', (_, res) => {
    const jobs = [
        {
            role: "Sales Manager",
            location: "Delhi",
            minexp : 5,
            maxexp: 10,
        },
        {
            role: "Junior Sales Manager",
            location: "Kolkata",
            minexp : 3,
            maxexp: 5,
        }
    ]
    res.json(jobs);
});

app.post('/jobs', (req, res) => {
    
})