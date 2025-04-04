const express = require('express');
const router = express.Router();
const alertsController = require('../controllers/alertsController');

router.get('/latest', alertsController.getRecentAlerts);

module.exports = router;
