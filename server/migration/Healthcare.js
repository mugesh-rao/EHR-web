var HealthCare = artifacts.require("../helpers/Health.sol");
const ADMIN_ADDRESS = "0xF6F2F51c07e44efE7BC25E0EC6B332f39d930ac0"; // hard coded address from Ganache

module.exports = function(deployer) {
  deployer.deploy(HealthCare, ADMIN_ADDRESS);
};