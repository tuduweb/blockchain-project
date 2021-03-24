const demo = artifacts.require('./Demo.sol');
const simpleDemo = artifacts.require('SimpleStorage')

contract('demo', (accounts) => {

    // 第1个测试：调用get()函数，检查返回值，测试合约中value初始值是否是: 'myValue'
    it('initializes with the correct value', async () => {
        // 获取合约实例
        const myDemo = await demo.deployed()
        const value = await myDemo.getX()
        // 使用断言测试value的值
//        assert.equal(value, 'hello world')
        console.log("||"+value+"||");
    })

    it('simpleDemo', async () => {
        // 获取合约实例
        const myDemo = await simpleDemo.deployed()
        const addr = await myDemo.set("hello world")
        const value = await myDemo.get()
        // 使用断言测试value的值
//        assert.equal(value, 'hello world')
        console.log("||"+value+"||");
    })
})