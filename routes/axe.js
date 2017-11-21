const request = require('request');
const cheerio = require('cheerio');
var express = require('express');
var fs      = require('fs');


module.exports = app => {
app.get('/axe', function(req, res){
    // Let's scrape Anchorman 2
    url = 'https://www.lonelyplanet.com/usa/san-francisco/attractions/de-young-museum/a/poi-sig/1340028/1329646';
    
    request(url, function(error, response, html){
        if(!error){
        var $ = cheerio.load(html);
    
        var title, release, rating;
 
        var json = { title : "", release : "", rating : ""};   
        $('title').filter(function(){
            var data = $(this);
            console.log(data);
            title = data.children().first().text().trim();
            release = data.children().last().children().last().text().trim();
    
            json.title = title;
            json.release = release;
            })
    
            $('.ratingValue').filter(function(){
            var data = $(this);
            rating = data.text().trim();
    
            json.rating = rating;
            })
        }
        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
        console.log('File successfully written! - Check your project directory for the output.json file');
        })
        res.send('Check your console!')
    })
    }) 
}

// module.exports = app => {
// app.get('/axe', function(req, res){
//     // Let's scrape Anchorman 2
//     url = 'http://www.imdb.com/title/tt1229340/';
  
//     request(url, function(error, response, html){
//       if(!error){
//         var $ = cheerio.load(html);
  
//         var title, release, rating;
//         var json = { title : "", release : "", rating : ""};   
//         $('.title_wrapper').filter(function(){
//             var data = $(this);
//             title = data.children().first().text().trim();
//             release = data.children().last().children().last().text().trim();
    
//             json.title = title;
//             json.release = release;
//           })
    
//           $('.ratingValue').filter(function(){
//             var data = $(this);
//             rating = data.text().trim();
    
//             json.rating = rating;
//           })
//         }
//       fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
//         console.log('File successfully written! - Check your project directory for the output.json file');
//       })
//       res.send('Check your console!')
//     })
//   }) 
// }

