const database = require("../config/db");

module.exports.actionReply = (req,res)=>{
    // console.log(req.body)
    var action = req.body.action;
    if(action == 'fetch'){
        var query = "SELECT * FROM products ORDER BY id";
       var sql= database.query(query ,(err,data)=>{
          return res.json({
                data:data
            })
        })
    }
}
module.exports.actionReply1 = (req,res)=>{
    // console.log(req.body)
    var action = req.body.action;
    if(action == 'fetch'){
        var query = "SELECT * FROM products ORDER BY RAND() LIMIT 1";
       var sql= database.query(query ,(err,data)=>{
          return res.json({
                data:data
            })
        })
    }
}