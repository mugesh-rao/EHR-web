import Layout from "@/Layout/Layout";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

// Define a type for the policy details state
type PolicyDetails = {
  policyName: string;
  provider: string;
  policyType: string;
  description: string;
  coverageOptions: string; // Consider changing to string[] for multiple options
  termMin: string;
  termMax: string;
  premiumAmount: string;
  premiumFrequency: string;
  ageMin: string;
  ageMax: string;
  employmentStatus: string;
  benefits: string; // Consider changing to string[] for multiple benefits
  exclusions: string; // Consider changing to string[] for multiple exclusions
  policyDocumentURL: string;
};

function AddInsurance() {
  const [policyDetails, setPolicyDetails] = useState<PolicyDetails>({
    policyName: "",
    provider: "",
    policyType: "Life Insurance",
    description: "",
    coverageOptions: "",
    
    termMin: "",
    termMax: "",
    premiumAmount: "",
    premiumFrequency: "",
    ageMin: "",
    ageMax: "",
    employmentStatus: "",
    benefits: "",
    exclusions: "",
    policyDocumentURL: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPolicyDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const policyDetailsToSend = {
  ...policyDetails,
  term: { min: policyDetails.termMin, max: policyDetails.termMax },
  premium: { amount: policyDetails.premiumAmount, frequency: policyDetails.premiumFrequency },
  // Adjust for other fields as necessary
};
      const response = await axios.post(
        "http://localhost:1000/insurance-policies",
        policyDetailsToSend
      ); // Adjust the API endpoint as necessary
      console.log(response); // Consider using notification libraries like react-toastify for user feedback
      // Handle success (clear form, show success message, etc.)
    } catch (error) {
      console.error("Failed to add insurance policy"); // Consider more robust error handling or user feedback
    }
  };

  return (
    <Layout>
      <div className=" w-full mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="w-full">
            <label
              htmlFor="policyName"
              className="block text-sm font-medium text-gray-700"
            >
              Policy Name
            </label>
            <input
              type="text"
              name="policyName"
              value={policyDetails.policyName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>
          {/* Description Field */}
          <div className="w-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              value={policyDetails.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Coverage Options Field */}
          <div className="w-full">
            <label
              htmlFor="coverageOptions"
              className="block text-sm font-medium text-gray-700"
            >
              Coverage Options
            </label>
            <input
              type="text"
              name="coverageOptions"
              value={policyDetails.coverageOptions}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Term Min Field */}
          <div className="w-full">
            <label
              htmlFor="termMin"
              className="block text-sm font-medium text-gray-700"
            >
              Term Min (years)
            </label>
            <input
              type="number"
              name="termMin"
              value={policyDetails.termMin}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Term Max Field */}
          <div className="w-full">
            <label
              htmlFor="termMax"
              className="block text-sm font-medium text-gray-700"
            >
              Term Max (years)
            </label>
            <input
              type="number"
              name="termMax"
              value={policyDetails.termMax}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Premium Amount Field */}
          <div className="w-full">
            <label
              htmlFor="premiumAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Premium Amount
            </label>
            <input
              type="number"
              name="premiumAmount"
              value={policyDetails.premiumAmount}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Premium Frequency Field */}
          <div className="w-full">
            <label
              htmlFor="premiumFrequency"
              className="block text-sm font-medium text-gray-700"
            >
              Premium Frequency
            </label>
            <select
              name="premiumFrequency"
              value={policyDetails.premiumFrequency}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            >
              <option value="">Select Frequency</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Semi-Annually">Semi-Annually</option>
              <option value="Annually">Annually</option>
            </select>
          </div>

          {/* Age Min Field */}
          <div className="w-full">
            <label
              htmlFor="ageMin"
              className="block text-sm font-medium text-gray-700"
            >
              Minimum Age
            </label>
            <input
              type="number"
              name="ageMin"
              value={policyDetails.ageMin}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Age Max Field */}
          <div className="w-full">
            <label
              htmlFor="ageMax"
              className="block text-sm font-medium text-gray-700"
            >
              Maximum Age
            </label>
            <input
              type="number"
              name="ageMax"
              value={policyDetails.ageMax}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Employment Status Field */}
          <div className="w-full">
            <label
              htmlFor="employmentStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Employment Status
            </label>
            <input
              type="text"
              name="employmentStatus"
              value={policyDetails.employmentStatus}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Benefits Field */}
          <div className="w-full">
            <label
              htmlFor="benefits"
              className="block text-sm font-medium text-gray-700"
            >
              Benefits
            </label>
            <input
              type="text"
              name="benefits"
              value={policyDetails.benefits}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Exclusions Field */}
          <div className="w-full">
            <label
              htmlFor="exclusions"
              className="block text-sm font-medium text-gray-700"
            >
              Exclusions
            </label>
            <input
              type="text"
              name="exclusions"
              value={policyDetails.exclusions}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          {/* Policy Document URL Field */}
          <div className="w-full">
            <label
              htmlFor="policyDocumentURL"
              className="block text-sm font-medium text-gray-700"
            >
              Policy Document URL
            </label>
            <input
              type="text"
              name="policyDocumentURL"
              value={policyDetails.policyDocumentURL}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 w-full "
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Insurance Policy
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddInsurance;
