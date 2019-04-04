var Request = require("request");


Request.get("http://localhost:3000/api/Images", (error, response, body) => {
   if(error) {
       return console.dir(error);
   }
  // console.log(body);
  var jsondata = JSON.parse(body);
 // console.log(jsondata);
   newBody = jsondata.filter(function(o){
    return (o.class === 'beamer');
    }) 
    console.log(newBody);
    var count = newBody.length;
    console.log(count);
});
