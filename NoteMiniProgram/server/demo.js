const Mysql = require('mysql')
var connection = Mysql.createConnection({
    host:       '116.62.132.128',
    user:       'root',
    password:   'root',
    database:   'miniprogram_note',
    port:       3306,
    charset:    'UTF8_GENERAL_CI',
    multipleStatements:false
})

var t = connection.query("select * from notes order by `update_time` desc limit 1",
            null,
            (err, result) => {
                console.log(result)
                //console.log(global.etherData)
        });
console.log("????")
connection.end();
