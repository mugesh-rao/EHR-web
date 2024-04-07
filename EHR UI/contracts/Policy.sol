// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Insurance {
    address public insuranceCompanyAdmin;
    address public claimsAdjuster;

    struct Policy {
        uint256 policyID;
        uint256 premium;
        uint256 signatureCount;
        string policyType;
        string startDate;
        string endDate;
        bool isActive;
        address policyHolder;
        mapping(address => uint256) signatures;
    }

    constructor(address _claimsAdjuster) {
        insuranceCompanyAdmin = msg.sender;
        claimsAdjuster = _claimsAdjuster;
    }

    // Mapping to store policies
    mapping(uint256 => Policy) public policies;
    uint256[] public policyIDs;

    event PolicyCreated(uint256 policyID, string policyType, string startDate, string endDate, uint256 premium);
    event PolicySigned(uint256 policyID, string policyType, string startDate, string endDate, uint256 premium);

    modifier onlyAuthorizedSigners {
        require(msg.sender == insuranceCompanyAdmin || msg.sender == claimsAdjuster, "Not authorized to sign.");
        _;
    }

    modifier validateBeforeSigning(uint256 _policyID) {
        require(policies[_policyID].isActive, "Policy does not exist");
        require(policies[_policyID].policyHolder != address(0), "Invalid policy holder address");
        require(msg.sender != policies[_policyID].policyHolder, "Policy holder cannot sign");
        require(policies[_policyID].signatures[msg.sender] != 1, "Cannot sign more than once");
        _;
    }

    modifier validatePolicy(uint256 _policyID) {
        // Only allows new policies to be created
        require(!policies[_policyID].isActive, "Policy already exists");
        _;
    }

    // Function to create a new insurance policy
    function createPolicy(
        uint256 _policyID,
        uint256 _premium,
        string memory _policyType,
        string memory _startDate,
        string memory _endDate
    ) public validatePolicy(_policyID) {
        Policy storage newPolicy = policies[_policyID];
        newPolicy.policyHolder = msg.sender;
        newPolicy.policyID = _policyID;
        newPolicy.policyType = _policyType;
        newPolicy.startDate = _startDate;
        newPolicy.endDate = _endDate;
        newPolicy.premium = _premium;
        newPolicy.isActive = true;
        newPolicy.signatureCount = 0;

        policyIDs.push(_policyID);
        emit PolicyCreated(newPolicy.policyID, _policyType, _startDate, _endDate, _premium);
    }

    // Function to sign an insurance policy
    function signPolicy(uint256 _policyID) public onlyAuthorizedSigners validateBeforeSigning(_policyID) {
        Policy storage policy = policies[_policyID];
        policy.signatures[msg.sender] = 1;
        policy.signatureCount++;

        // Checks if the policy has been signed by both the insurance company and claims adjuster
        if(policy.signatureCount == 2)
            emit PolicySigned(policy.policyID, policy.policyType, policy.startDate, policy.endDate, policy.premium);
    }
}
