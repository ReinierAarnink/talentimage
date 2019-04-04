var Request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/post', function (req, res) {
    var mongo = req.body;
    var mongoclass = req.body.class
    //console.log(mongoclass);
    //console.log(mongoscore);


    // make post+get request to MongoDB 
    Request
        .post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/api/Images",
            "body": JSON.stringify(mongo)
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
                var result = JSON.parse(body);
            
           // console.log(result);
        })

        res.send(JSON.stringify(result, count));
});
app.listen(4000, function () {
    console.log("Started on PORT 4000");
});
