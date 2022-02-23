const express = require("express");
const app = express();

app.use('/bscss', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/css', express.static(__dirname + '/publico/css'));
app.use('/img', express.static(__dirname + '/publico/img'));
app.use('/js', express.static(__dirname + '/publico/js'))

app.listen(8080,function(){
    console.log('Servidor rodando na porta 8080');
});

app.get('/gamingneuigkeiten.com',function(req, res){
    res.sendFile(__dirname + '/index.html');
});