const mongoose = require('mongoose');

const AnalyticsSchema = mongoose.Schema(
  {
    referrer: {
      type: String,
    },
    location: {
      type: String,
    },
    platform: {
      type: String,
    },
    languages: {
      type: Array,
    },
    userAgent: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
