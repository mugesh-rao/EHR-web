// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsurancePolicy {
    address public insuranceCompany;

    struct Policy {
        uint256 id;
        string policyType;
        uint256 premium;
        uint256 coverAmount;
        bool isActive;
        address insured;
    }

    struct Claim {
        uint256 id;
        uint256 policyId;
        string reason;
        uint256 claimAmount;
        bool isProcessed;
        bool isApproved;
    }

    uint256 private nextPolicyId = 1;
    uint256 private nextClaimId = 1;

    mapping(uint256 => Policy) public policies;
    mapping(uint256 => Claim) public claims;

    event PolicyCreated(uint256 policyId, address insured);
    event ClaimSubmitted(uint256 claimId, uint256 policyId, uint256 claimAmount);
    event ClaimProcessed(uint256 claimId, bool isApproved);

    modifier onlyInsuranceCompany() {
        require(msg.sender == insuranceCompany, "Only the insurance company can perform this action.");
        _;
    }

    constructor() {
        insuranceCompany = msg.sender;
    }

    function createPolicy(string memory _policyType, uint256 _premium, uint256 _coverAmount) public {
        policies[nextPolicyId] = Policy({
            id: nextPolicyId,
            policyType: _policyType,
            premium: _premium,
            coverAmount: _coverAmount,
            isActive: true,
            insured: msg.sender
        });

        emit PolicyCreated(nextPolicyId, msg.sender);
        nextPolicyId++;
    }

    function submitClaim(uint256 _policyId, string memory _reason, uint256 _claimAmount) public {
        require(policies[_policyId].insured == msg.sender, "Only the insured party can submit a claim for this policy.");
        require(policies[_policyId].isActive, "This policy is not active.");

        claims[nextClaimId] = Claim({
            id: nextClaimId,
            policyId: _policyId,
            reason: _reason,
            claimAmount: _claimAmount,
            isProcessed: false,
            isApproved: false
        });

        emit ClaimSubmitted(nextClaimId, _policyId, _claimAmount);
        nextClaimId++;
    }

    function processClaim(uint256 _claimId, bool _approve) public onlyInsuranceCompany {
        Claim storage claim = claims[_claimId];
        require(claim.id != 0, "Claim does not exist.");
        require(!claim.isProcessed, "Claim has already been processed.");

        claim.isProcessed = true;
        claim.isApproved = _approve;

        if (_approve) {
            // Handle claim approval logic, e.g., transfer cover amount to the insured
        }

        emit ClaimProcessed(_claimId, _approve);
    }
}
