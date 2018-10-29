var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
        console.log('Response Status Code: ', response.statusCode, response.statusMessage); //the response consist of the body and header, header is invisible
        console.log('Response type: ', response.headers['content-type']); //shower the header from the body
        console.log('Downloading image...');
       })
       .pipe(fs.createWriteStream('./future.jpg')) //write the file to local
       .on('finish', function(){
        console.log('Download complete.');
      });
