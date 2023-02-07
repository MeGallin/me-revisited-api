const ErrorResponse = require('../utils/errorResponse');
const requestIp = require('request-ip');
const Analytics = require('../models/AnalyticsModel');

// @description: Get All the Analytics Data
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
