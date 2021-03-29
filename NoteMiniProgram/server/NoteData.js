const mysql = require("mysql")
const EtherData = require("./EtherData");

class NoteData {
    constructor() {
        this.connection = mysql.createConnection({
            host: '116.62.132.128',
            user: 'root',
            password: 'root',
            database: 'miniprogram_note',
            port: 3306,
            charset: 'UTF8_GENERAL_CI',
            multipleStatements: false
        });
    }

    //获取用户的笔记本数据
    getNoteList(reqdata, callback, errHandle) {
        this.connection.query("select * from `notes` where `user_addr`=? and `note_status`=? order by `update_time` desc",
            [reqdata.user_addr, 1],
            (err, result) => {
                if (err) {
                    errHandle(err)
                }
                callback(result)
            })
    }

    //user_addr, open_id, title, content
    addNote(reqdata, callback, errHandle) {
        try {
            this.connection.query("insert into notes set ?", {
                user_addr: reqdata.user_addr,
                title: reqdata.title,
                create_time: new Date(),
                update_time: new Date(),
                last_code: '0',
                create_code: '0',
            }, (err, result) => {
                if (err) {
                    throw err
                } else {
                    console.log(result)
                    global.etherdata.editNote(reqdata.user_addr, reqdata.openid, result.insertId, reqdata.title, reqdata.content, res => {
                        console.log(res)
                        this.connection.query("update notes set ? where id=" + result.insertId, {
                            last_code: res,
                            create_code: res,
                            note_status: 1
                        }, (err, result) => {
                            if (err) {
                                throw err
                            } else {
                                console.log(result)
                                callback(result)
                            }
                        }
                        )
                    }, err => {
                        throw err
                    })
                }
            })
        } catch (e) {
            errHandle(e)
        }
    }


    editNote(reqdata, callback, errHandle) {
        try {
            //(account, openid, id, title, content, callback, errCallback)
            global.etherdata.editNote(reqdata.user_addr, reqdata.openid, reqdata.id, reqdata.title, reqdata.content, code => {
                console.log(code)

                this.connection.query("update notes set ? where id=" + reqdata.id, {
                    title: reqdata.title,
                    update_time: new Date(),
                    last_code: code
                }, (err, result) => {
                    if (err) {
                        throw err
                    } else {
                        callback(result)
                    }
                })

            }, err => {
                throw err
            })

        } catch (e) {
            errHandle(e)
        }
    }

    getNote(reqdata, callback, errHandle) {
        this.connection.query("select * from `notes` where id=?",[reqdata.id], (err, result) => {
            if(err){
                errHandle(err)
            }else{
                if(result.length === 0){
                    errHandle({'result': 'id is invalid', 'res': result})
                }else{
                    if(result[0]['note_status'] > 0)
                    {
                        etherdata.getNote(reqdata.user_addr, reqdata.id, etherResult => {
                            callback({'database': result[0], 'ether': etherResult})
                        }, err => {
                            errHandle(err)
                        })
                    }else{
                        errHandle({'result': 'id:' + result[0]['id']+ ' is invalid, cause note_status <= 0'})
                    }
                }
            }
        })
    }

    //账户标识, 查询到账号的回调, 新建账号的回调, 创建账号失败, 增加到数据库失败
    getAccountAddress(openid, callback, newAccountCallback, errHandleInCreate, errHandleInInsert) {
        this.connection.query("select * from users where ? limit 1",
            { open_id: openid },
            (err, result) => {
                console.log(result)
                if (result.length === 0) {
                    //创建一个新的矿账号..
                    global.etherdata.createAccount(openid, (addr, balance) => {
                        this.connection.query("insert into users set ?", { open_id: openid, account_addr: addr }, (err, result) => {
                            if (err) {
                                console.log(err)
                                errHandleInInsert(err, addr)
                            } else {
                                console.log(result)
                                newAccountCallback(result, addr)
                            }
                        })
                    }, err => {
                        errHandleInCreate(err)
                    })

                } else {
                    callback(result)
                }
                //res.send(err)
                //console.log(global.etherData)
            })
    }
}

module.exports = NoteData;