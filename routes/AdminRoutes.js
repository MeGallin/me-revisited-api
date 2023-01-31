const express = require('express');
const { protect, admin } = require('../middleWare/AuthMiddleWare');

const {
  adminGetAllUsers,
  adminReceivedEmails,
  adminGetIpAddress,
  adminDeleteUser,
} = require('../controllers/AdminController');

const router = express.Router();
router.route('/admin/user-details').get(protect, admin, adminGetAllUsers);
router.route('/admin/received-emails').get(protect, admin, adminReceivedEmails);
router.route('/admin/ip-address').get(protect, admin, adminGetIpAddress);
router.route('/admin/user-delete/:id').delete(protect, admin, adminDeleteUser);
module.exports = router;
