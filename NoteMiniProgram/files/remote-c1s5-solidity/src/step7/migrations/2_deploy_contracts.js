const SimpleStorage = artifacts.require('SimpleStorage')
module.exports = async function(deployer) {
//基础数据类型
    deployer.deploy(SimpleStorage)
}