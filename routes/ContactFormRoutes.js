const express = require('express');
const router = express.Router();

const { sendContactForm } = require('../controllers/ContactFormController');
router.route('/contact-form').post(sendContactForm);

module.exports = router;
