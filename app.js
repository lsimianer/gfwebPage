let express = require('express');
let path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');


let app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0')