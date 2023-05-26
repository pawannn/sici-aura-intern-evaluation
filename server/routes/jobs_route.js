const express = require('express');
const jobs_controller = require('../controllers/jobs_crud_controller');

const router = express.Router();

router.get('/', jobs_controller.jobs_retrieve);
router.post('/', jobs_controller.jobs_new);

module.exports = router;