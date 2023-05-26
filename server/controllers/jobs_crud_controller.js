const Jobs = require('../models/jobs');

//jobs_new, jobs_retrieve

const jobs_new = (req, res) => {
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
}

const jobs_retrieve = (req, res) => {
    Jobs.find().then(data => {
        res.json(data);
    });
}

module.exports = {
    jobs_new,
    jobs_retrieve,
}