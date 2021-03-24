pragma solidity >=0.5.0;

contract SimpleStorage {
    /********** Begin **********/
    uint storedData;//更改成string类型
    
    //输入参数更改为string类型,需要指定存储位置memory 如(string memory x)
    function set(uint x) public {
        storedData = x;
    }

    //返回参数更改为string类型,需要指定存储位置memory 如(string memory)
    function get() public view returns (uint) {
        return storedData;
    }
    /********** End **********/
}