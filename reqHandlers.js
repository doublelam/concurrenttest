function start(res){
	function sleep(milliSeconds){
    var startTime =new Date().getTime();
    while(new Date().getTime()< startTime + milliSeconds);
  }

	// sleep(10000);
	console.log('handle start page');
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>start page</h1>");
	res.end();
};
function test(res){
	console.log('handle test page');
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>test page</h1>");
	res.end();
};

exports.start = start;
exports.test = test;