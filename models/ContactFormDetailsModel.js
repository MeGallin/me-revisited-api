const mongoose = require('mongoose');

const ContactFormDetailsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
  },
  {
    timestamps: true,
  },
);

const ContactFormDetails = mongoose.model(
  'ContactFormDetails',
  ContactFormDetailsSchema,
);
module.exports = ContactFormDetails;
