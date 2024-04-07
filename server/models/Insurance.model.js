const mongoose = require("mongoose");

const insuranceApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,

  },
  dateOfBirth: {
    type: Date,

  },
  gender: {
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
  occupation: String,
   incomeRange: String,
  maritalStatus: String,
  numberOfDependents: Number,
  applicationStatus: {
    type: String,
    enum: ['Approved', 'Rejected', 'Pending'], // Enum to restrict status to these values
    default: 'Pending', // Default status when a new application is created
  },
  statusMessage: {
    type: String,
    default: '',
  },
  medicalHistory: {
    existingConditions: [String],
    medications: [String],
    allergies: [String],
    familyMedicalHistory: String,

    lifestyle: {
      smoker: Boolean,
      alcoholConsumption: Boolean,
      exerciseFrequency: String,
    },
  },
  insuranceDetails: {
    policyId: {
      type: String,
      },
    policyDetails: String,
    coverageAmount: Number,
    premiumAmount: Number,
    termLength: Number,
    premiumPaymentFrequency: String,
  },
  labApprovals: [
    {
      labId: String,
      approved: Boolean,
      approvalDate: Date,
    },
  ],
  hospitalApprovals: [
    {
      hospitalId: String,
      approved: Boolean,
      approvalDate: Date,
    },
  ],
  insuranceCompanyApprovals: [
    {
      companyId: String,
      approved: Boolean,
      approvalDate: Date,
    },
  ],


  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Insurance", insuranceApplicationSchema);
