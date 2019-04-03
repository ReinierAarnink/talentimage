var Request = require("request");


Request.get("http://localhost:3000/api/Images", (error, response, body) => {
   if(error) {
       return console.dir(error);
   }
  var jsondata = JSON.parse(body);
   newBody = jsondata.filter(function(o){
    return (o.class === 'beamer');
    }) 
    //console.log(newBody);
    var count = newBody.length;
    console.log(count);
});
