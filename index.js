var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": <h2>"Welcome to cloud computing training"</h2> }');
});

app.get('/next', function (req, res) {
    res.send('{ "response": "yes this is the next page,please register your account"}');
});
app.get('/ok', function (req, res) {
    res.send('{ "response": " Nice Job!, cool job and welldone!" }');
});
app.listen(process.env.PORT || 3000);
console.log(`server running on http://localhost:3000`);
module.exports = app;