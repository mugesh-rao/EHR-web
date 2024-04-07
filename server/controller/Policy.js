const InsurancePolicy = require('../models/InsurancePolicy'); // Adjust the path to your InsurancePolicy model

// Add a new insurance policy
exports.addInsurancePolicy = async (req, res) => {
  try {
    const newPolicy = new InsurancePolicy(req.body);
    await newPolicy.save();
    res.status(201).json({ message: 'Insurance policy added successfully', data: newPolicy });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add insurance policy', error: error.message });
  }
};

// Fetch all insurance policies
exports.getAllInsurancePolicies = async (req, res) => {
  try {
    const policies = await InsurancePolicy.find();
    res.status(200).json(policies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch insurance policies', error: error.message });
  }
};
