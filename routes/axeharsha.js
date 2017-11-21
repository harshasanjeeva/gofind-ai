
var request = require("request")

var url = "http://myttc.ca/finch_station.json";
var  tagline="Hi";
var  check="0";
module.exports = app => {
    app.get('/axe', (req, res, next) => {
        console.log("im here inside the axe get");
request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        //var results = JSON.parse(body);
        var results = body;
        myVar = "Hi"
        res.render('index.ejs',
        {
         tagline: results,
            check: "10"
        });
        console.log(results) // Print the json response
    }
   })
 });
}