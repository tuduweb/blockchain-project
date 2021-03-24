pragma solidity >=0.5.0;

contract Demo{
    uint64 public x = 10;
    function getX() public view returns(uint64){
        return x;
    }
}