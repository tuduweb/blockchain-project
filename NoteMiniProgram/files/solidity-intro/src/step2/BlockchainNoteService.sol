pragma solidity ^0.4.22;

contract BlockchainNoteService
{
    struct Note{
        string title;//笔记标题
        string content;//笔记内容
    }
    
    mapping(address => mapping(uint256 => Note)) notedata;
 
    function editNote(uint256 id,  string title, string content)  public
    {
        require(id > 0, "id不能为空");
        require(keccak256(title) != keccak256(""), "title不能为空");
        require(keccak256(content) != keccak256(""), "content不能为空");
        notedata[msg.sender][id]= Note(title, content);
    }

    function getNote(uint256 id) view public returns(string, string)
    {
        require(id > 0, "id不能为空");
	 // 请在下面添加代码，完成查看笔记函数
	/****** Begin ******/





	/****** End ******/
    }
}
