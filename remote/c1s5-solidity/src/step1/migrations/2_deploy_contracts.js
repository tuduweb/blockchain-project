const demo = artifacts.require('Demo')
const simpleDemo = artifacts.require('SimpleStorage')
module.exports = async function(deployer) {
//基础数据类型
    deployer.deploy(demo)
    deployer.deploy(simpleDemo)
}