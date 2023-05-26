const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Jobs = require('./models/jobs');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

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
    Jobs.find().then(data => {
        res.json(data);
    });
});

app.post('/jobs', (req, res) => {
    const {role, location, minexp, maxexp} = req.body;
    const job = new Jobs({role, location, minexp, maxexp});
    job.save()
    .then(() => {
        console.log('saved');
        res.json({message: "saved"});
    })
    .catch((err) => {
        console.log(err);
    });
});