var http = require('http');
var cheerio = require('cheerio');

http.get('http://f2edocs.com/', function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on('data', function(d) {
        process.stdout.write(d);
    });

}).on('error', function(e) {
    console.error(e);
});
