const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

router.get('/:id', trackController.getCaseStatus);
router.put('/:id/update', trackController.updateCaseStatus);

module.exports = router;
