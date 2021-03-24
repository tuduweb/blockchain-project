pragma solidity ^0.4.22;

contract note 
{
    struct Note{
        string title;//笔记标题
        string content;//笔记内容
    }
    
    mapping(address => mapping(uint256 => Note)) notedata;
 
    function editNote(uint256 id,  string title, string content)  public
    {
        require(id > 0, "id不能为空");
        require(keccak256(abi.encodePacked(title))!=keccak256(abi.encodePacked("")), "title不能为空");
        require(keccak256(abi.encodePacked(content))!=keccak256(abi.encodePacked("")), "content不能为空");
        notedata[msg.sender][id]= Note(title, content);
    }

    function getNote(uint256 id) view public returns(string, string)
    {
        require(id > 0, "id不能为空");
        return (notedata[msg.sender][id].title, notedata[msg.sender][id].content);
    }
}
