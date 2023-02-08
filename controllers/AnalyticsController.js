const ErrorResponse = require('../utils/errorResponse');
const requestIp = require('request-ip');
const Analytics = require('../models/AnalyticsModel');

// @description: Create the Analytics Data
// @route: POST /api/analytics
// @access: Public
exports.analytics = async (req, res, next) => {
  const ipAddress = requestIp.getClientIp(req);
  const { referrer, location, languages, platform, userAgent } = req.body;
  const analytics = await Analytics.create({
    referrer,
    location,
    platform,
    languages,
    userAgent,
    ipAddress: ipAddress,
  });
  try {
    if (!analytics) return next(new ErrorResponse('No data to submit', 500));
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
// @description: Get All the Analytics Data
// @route: POST /api/analytics-data
// @access: Private and Admin
exports.analyticsData = async (req, res, next) => {
  const analyticsData = await Analytics.find();
  try {
    if (!analyticsData)
      return next(new ErrorResponse('No data to submit', 500));
    res.status(200).json({ success: true, analyticsData });
  } catch (error) {
    next(error);
  }
};
// @description: Delete select Analytics Data
// @route: POST /api/analytics-data-delete/:id
// @access: Private and Admin
exports.analyticsDataDelete = async (req, res, next) => {
  const record = await Analytics.findById(req.params.id);
  try {
    if (!record)
      return next(new ErrorResponse('No record could be found', 500));
    await record.remove({});
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
