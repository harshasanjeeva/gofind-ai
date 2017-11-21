var request = require("request")

var url = "https://www.lonelyplanet.com/usa/san-francisco/attractions/de-young-museum/a/poi-sig/1340028/1329646";

module.exports = app => {
    app.get('/axe', (req, res, next) => {
request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var results = JSON.parse(body);
        res.status(200).send({"success": true, "result": results});
        console.log(results) // Print the json response
    }
   })
 });
}