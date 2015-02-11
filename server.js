var express =  require('express');

var app = express();
var port = 9001;


app.use(express.static(__dirname+'/public'));

app.get('/api/interest_rate', function(req, res){
	var randomNumber = Math.floor(Math.random() * 2000) / 100
	res.json(randomNumber);
})


app.listen(port, function(){
	console.log('now listening on the port:' + port);
});