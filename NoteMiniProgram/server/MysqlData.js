const mysql = require("mysql")
const moment = require('moment')

class MysqlData
{
    constructor()
    {
        this.connection = mysql.createConnection({
            host:       '127.0.0.1',
            user:       'root',
            password:   'root',
            database:   'miniprogram_note',
            port:       3306,
            charset:    'UTF8_GENERAL_CI',
            multipleStatements:false
        });
    }

    //获取用户的笔记本数据
    getNoteList(req, res) {
        //更改成返回array比较合适 异步过程，所以修改无效
        this.connection.query("select * from notes",
            {user_id: req.query.id},
            (err, result) => {
                console.log(result)
                res.send(result)
                //console.log(global.etherData)
        })
    }

    addNote(req, res) {
        this.connection.query("insert into notes set ?", {user_id: req.query.user_id, title: req.query.title, create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), update_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}, (err, result) => {
            if(err) {
                console.log(err)
                res.send("add fault")
            }else{
                console.log(result)
                res.send(result)
            }
        })
    }
}

module.exports = MysqlData;