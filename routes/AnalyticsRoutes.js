const express = require('express');
const router = express.Router();
const { analytics } = require('../controllers/AnalyticsController');
router.route('/analytics').post(analytics);
module.exports = router;
