const mongoose = require("mongoose");

const insurancePolicySchema = new mongoose.Schema({
  policyName: {
    type: String,
    trim: true,
  },
  provider: {
    type: String,
    trim: true,
  },
  policyType: {
    type: String,
    enum: ["Life Insurance", "Health Insurance", "Vehicle Insurance", "Property Insurance"],
    
  },
  description: {
    type: String,
    trim: true,
  },
  coverageOptions: [{
    type: String,
    trim: true,
  }],
  term: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  premium: {
    amount: Number,
    frequency: {
      type: String,
      enum: ["Monthly", "Quarterly", "Semi-Annually", "Annually"],
    },
  },
  eligibilityCriteria: {
    age: {
      min: Number,
      max: Number,
    },
    employmentStatus: String,
    otherCriteria: String,
  },
  benefits: [String],
  exclusions: [String],
  riders: [{
    name: String,
    description: String,
    additionalCost: Number,
  }],
  policyDocumentURL: String,
  reviews: [{
    reviewer: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  ratingsAverage: {
    type: Number,
    min: 1,
    max: 5,
    set: val => Math.round(val * 10) / 10, // Round to 1 decimal place
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

insurancePolicySchema.pre("save", function(next) {
  // Calculate the average rating from the reviews
  if (this.reviews.length > 0) {
    this.ratingsAverage = this.reviews.reduce((acc, cur) => acc + cur.rating, 0) / this.reviews.length;
  } else {
    this.ratingsAverage = 0;
  }
  next();
});

module.exports = mongoose.model("InsurancePolicy", insurancePolicySchema);
