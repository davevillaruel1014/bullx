const BullsxBears = artifacts.require("./BullsxBears.sol");

module.exports = function(_deployer) {
  _deployer.deploy(BullsxBears);
};
