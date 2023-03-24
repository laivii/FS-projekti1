var express = require('express');
var fs = require('fs');
const app = express();
    app.use(express.json());
    app.use(express.urlencoded())

function formatTable() {
    var data = fs.readFileSync('./guestbook.json', 'utf8');
    var tiedot = JSON.parse(data);

    var table = `
    <table class="pure-table pure-table-horizontal">
        <thead>
            <tr>
                <th>Username</th>
                <th>Country</th>
                <th>Message</th>
            </tr>
        <thead>
        <tbody>`;

    for(let i = 0; i < tiedot.length; i++){
        var henkilö = tiedot[i];

        table += `
        <tr>
            <td>${henkilö["username"]}</td>
            <td>${henkilö["country"]}</td>
            <td>${henkilö["message"]}</td>
        </tr>`;
    }

    table += "</tbody></table>"

    return table;
}

app.use(express.static('./public/static/'));

app.get('/', function(req, res) {
    var contents = fs.readFileSync('./public/index.html');
    res.send(contents.toString());
});

app.get('/guestbook', function(req, res) {
    var header = fs.readFileSync('./public/guestbook.html', 'utf8');
    var table = formatTable();
    var tail = "</body></html>";
    res.send(header + table + tail);
});

app.get('/newmessage', function(req, res) {
    var contents = fs.readFileSync('./public/newmessage.html', 'utf8');
    res.send(contents);
});

app.get('/ajaxmessage', function(req, res) {
    var contents = fs.readFileSync('./public/ajaxmessage.html');
    res.send(contents.toString());
});

app.get('*', function(req, res) {
    res.send("Can\'t find requested page");
});

app.post('/newmessage', function(req, res) {
    var viestit = fs.readFileSync('guestbook.json', 'utf8');
    
    var viestit_json = JSON.parse(viestit);
        viestit_json.push(req.body);

    var viestit_str = JSON.stringify(viestit_json);

    fs.writeFileSync('guestbook.json', viestit_str);

    res.set("location", "/guestbook");
    res.status(301).send()
    return;
});

app.post('/ajaxmessage', function(req, res) {
    var viestit = fs.readFileSync('guestbook.json', 'utf8');
    
    var viestit_json = JSON.parse(viestit);
        viestit_json.push(req.body);

    var viestit_str = JSON.stringify(viestit_json);

    fs.writeFileSync('guestbook.json', viestit_str);

    res.send(formatTable());
    return;
});

app.listen(8080);
console.log('Toimii');