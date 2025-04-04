const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/new', reportController.createReport);
router.get('/all', reportController.getAllReports);

module.exports = router;
