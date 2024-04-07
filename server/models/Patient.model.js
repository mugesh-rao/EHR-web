const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    fullName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
    },
    contactInformation: {
      phone: {
        type: String,
      },
      email: {
        type: String,
        lowercase: true,
      },
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: {
        type: String,
      },
    },
    medicalHistory: {
      existingConditions: [String],
      medications: [String],
      allergies: [String],
    },
    insuranceApplications: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InsuranceApplication'
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Patient", patientSchema);
  