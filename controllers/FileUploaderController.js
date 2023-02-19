const ErrorResponse = require('../utils/errorResponse');
const fsPromises = require('fs').promises;
const path = require('path');

// @description: Get the contents of the news file
// @route: GET /api/my-news
// @access: PUBLIC
exports.readMyNews = async (req, res, next) => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, '../' + 'routes/' + 'upload', 'news.txt'),
      'utf8',
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
// @description: Get the contents of the recent past text file
// @route: GET /api/recent-past
// @access: PUBLIC
exports.readPresently = async (req, res, next) => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, '../' + 'routes/' + 'upload', 'presently.txt'),
      'utf8',
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
// @description: Get the contents of the recent past text file
// @route: GET /api/recent-past
// @access: PUBLIC
exports.readRecentPast = async (req, res, next) => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, '../' + 'routes/' + 'upload', 'recent_past.txt'),
      'utf8',
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
