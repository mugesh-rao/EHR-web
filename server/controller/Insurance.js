// Assuming you have a model named `InsuranceApplication` for your database operations
const InsuranceApplication = require('../models/InsurancePolicy');

exports.createInsuranceApplication = async (req, res) => {
  try {
    const { fullName, mobileNumber, dob,  } = req.body;

    // Create a new insurance application document using the model
    const newApplication = new InsuranceApplication({
      fullName,
      mobileNumber,
      dob,
    });

    // Save the new application to the database
    await newApplication.save();

    // Send a success response back to the client
    res.status(201).json({ message: 'Insurance application submitted successfully', data: newApplication });
  } catch (error) {
    console.error('Error in creating insurance application:', error);
    res.status(500).json({ error: 'Failed to submit insurance application' });
  }
};

exports.getAllInsuranceApplications = async (req, res) => {
  try {
    const applications = await InsuranceApplication.find();

    res.status(200).json(applications);
  } catch (error) {
    console.error('Error in fetching insurance applications:', error);
    res.status(500).json({ error: 'Failed to fetch insurance applications' });
  }
};
exports.getInsuranceApplicationById = async (req, res) => {
  try {
    // Extracting the ID from the request parameters
    const Id = req.params.id;

    // Finding the insurance application by its ID in the database
    const application = await InsuranceApplication.findById(Id);

    if (!application) {
      return res.status(404).json({ message: 'Insurance application not found' });
    }

    res.status(200).json(application);
  } catch (error) {
    console.error('Error in fetching insurance application by ID:', error);
    res.status(500).json({ error: 'Failed to fetch insurance application' });
  }
};


