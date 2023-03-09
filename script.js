var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

Guestbook();

function Guestbook() {
    var data = fs.readFileSync('./guestbook.json', (err) => {
        if (err) throw err;
    });

    data = data.toString();
    data = JSON.parse(data);

    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("<table border='1'><tr><th>ID</th><th>USERNAME</th><th>COUNTRY</th><th>DATE</th><th>MESSAGE</th></tr>")
        for (let i = 0; i < data.length; i++){
            var person = data[i];
            res.write("<tr><td>" + person.id + "</td><td>" + person.username + "</td><td>" + person.country + "</td><td>" + person.date + "</td><td>" + person.message +  "</td></tr>");
        }
        res.write("</table>");
        res.end();
    }).listen(8080);
}

function Routes() {
    app.get("/", function(req, res){
        res.send("Hello world!");
    });
}