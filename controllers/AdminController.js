const User = require('../models/UserModel');
const ContactFormDetails = require('../models/ContactFormDetailsModel');
const PageHits = require('../models/PageHitsModel');
const ErrorResponse = require('../utils/errorResponse');

// @description: Get All the Registered Users
// @route: GET /api/admin/user-details
// @access: Admin and Private
exports.adminGetAllUsers = async (req, res, next) => {
  const users = await User.find().sort({
    createdAt: -1,
  });
  try {
    if (!users) return next(new ErrorResponse('Nothing could be found', 500));
    res.status(200).json({ success: true, users });
  } catch (error) {
    next(error);
  }
};
// @description: Get All the Emails
// @route: GET /api/admin/received-emails
// @access: Admin and Private
exports.adminReceivedEmails = async (req, res, next) => {
  const emails = await ContactFormDetails.find().sort({
    createdAt: -1,
  });
  try {
    if (!emails) return next(new ErrorResponse('Nothing could be found', 500));
    res.status(200).json({ success: true, emails });
  } catch (error) {
    next(error);
  }
};
// @description: Get All the address
// @route: GET /api/admin/ip-addresses
// @access: Admin and Private
exports.adminGetIpAddress = async (req, res, next) => {
  const ipAddress = await PageHits.find().sort({
    createdAt: -1,
  });
  try {
    if (!ipAddress)
      return next(new ErrorResponse('Nothing could be found', 500));
    res.status(200).json({ success: true, ipAddress });
  } catch (error) {
    next(error);
  }
};
// @description: Delete a user and all their details
// @route: DELETE /api/admin/user-delete/:id
// @access: Admin and Private
exports.adminDeleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  try {
    if (!user) return next(new ErrorResponse('Nothing could be found', 500));
    await user.remove({});
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

//Private message
