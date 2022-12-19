var express = require("express");

var app = express();

const PORT = process.env.PORT ||  3007
const path  = require('path');


var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
// app.get('/',function(req,res){
//     return res.render('index');
// });


app.use('/', require('./routes/sample_data'))




//default route
app.all('/', (req, res) => {
    return res.status(200).send(" Connected... wohoo")
})

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
})
