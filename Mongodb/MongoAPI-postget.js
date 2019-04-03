var Request = require("request");

// make post+get request to MongoDB
Request
    .post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/api/Images",
        "body": JSON.stringify({
            "class": "clock",
            "score": "0.54"
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        var result = JSON.parse(body);
        console.log(result);
    })
    .pipe(Request.get("http://localhost:3000/api/Images", (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        var jsondata = JSON.parse(body);
        newBody = jsondata.filter(function (o) {
            return (o.class === 'clock');
        })
        //console.log(newBody);
        var count = newBody.length;
        console.log("aantal entries in database is " + count);
    })
    );
