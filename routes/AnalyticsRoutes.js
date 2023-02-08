const express = require('express');
const router = express.Router();
const {
  analytics,
  analyticsData,
  analyticsDataDelete,
} = require('../controllers/AnalyticsController');
const { protect, admin } = require('../middleWare/AuthMiddleWare');

router.route('/analytics').post(analytics);
router.route('/admin/analytics-data').get(protect, admin, analyticsData);
router
  .route('/admin/analytics-data-delete/:id')
  .delete(protect, admin, analyticsDataDelete);
module.exports = router;
