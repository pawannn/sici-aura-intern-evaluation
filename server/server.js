const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const jobs_router = require('./routes/jobs_route');

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

app.use('/jobs', jobs_router);
app.use((_, res) => {
    res.status(404).json({message: 404});
})