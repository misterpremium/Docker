var SU = require('/usr/prog/node/consultamongo')
module.exports = function(app){
/*app.get('/', function (req, res) {	
		res.sendfile('pagina.html');  
});
app.get('/tablas', function(req, res){
	res.sendfile('tablas.html');
});
app.get('/contact', function(req, res){
	res.sendfile('contacto.html');
});
app.get('/ico', function(req, res){
	res.sendfile('icono.ico');
});*/
app.get('/', function (req, res) {
	SU.list(function(e, ale){
		res.render('server', {title: 'SLA',error:'',consultamongo: ale});
	})
app.post('/', function(req, res){
	SU.new({alegado: req.param('alegado')},function(o){
		SU.list(function(e, ale){
			res.render('server', {title: 'SLA',error:o,consultamongo: ale});
	})
	})
})
}