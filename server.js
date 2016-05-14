var http = require('http');
var url = require('url');
var count = 0;
function server(route,handle){
	function onRequest(req,res){
		req.on('data',function(chunk){
			console.log(chunk);
		});
		req.on('end',function(){
			console.log('get data end');
			var path = url.parse(req.url).pathname;
			console.log(path);
			route(handle,path,res);
			console.log('request num',count++);
		});
		req.on('err',function(err){
			console.log(err);
		});
	};

	http.createServer(onRequest).listen(3000);
	console.log('server started');
}
	
exports.server = server;