const SimpleStorage = artifacts.require('SimpleStorage')
contract('simpleStorage', (accounts) => {
    it('simpleDemo', async () => {
        // 获取合约实例
        const simpleStorageTest = await SimpleStorage.deployed()
        const addr = await simpleStorageTest.set("educoder")
        const value = await simpleStorageTest.get()
        ////使用断言测试value的值
        //assert.equal(value, 'hello world')
        console.log("||"+value+"||");
    })
})