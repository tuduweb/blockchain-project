var Note = artifacts.require("Note")

contract("Note Test", accounts => {
    before(async() => {
        let a = await Note.deployed()

        //let c = await a.editNote(99999, "title", "content")
        //let d = await a.getNote(99999)
        console.log("合约地址:",a.address);

    });
});
