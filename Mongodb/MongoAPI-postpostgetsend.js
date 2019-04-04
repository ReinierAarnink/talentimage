var Request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//incoming request from processAPI at /post endpoint:
app.post('/post', function (req, res) {
    var mongo = req.body;
    var mongoclass = req.body.class
    Response = new Object;
    Response.Image = Object;
    Response.Count = Number;


    // make post+get request to MongoDB with request body from processAPI 
    Request
        .post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/api/Images",
            "body": JSON.stringify(mongo)
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            Response.Image = JSON.parse(body);

            console.log(Response.Image);
        })
        .pipe(Request.get("http://localhost:3000/api/Images", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            var jsondata = JSON.parse(body);
            newBody = jsondata.filter(function (o) {
                return (o.class === mongoclass)
            })
            //console.log(newBody + "4");
            Response.Count = newBody.length;
            console.log(Response.Count);
        }));

    //send response to processAPI; timeout so mongo can respond ^^
    res.setTimeout(500, function () {
        res.send(JSON.stringify(Response))
        delete Response.Count;
        delete Response.Image;
    });
});
app.listen(4000, function () {
    console.log("Started on port 4000");
});
