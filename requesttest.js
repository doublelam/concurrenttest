var querystring = require('querystring');
var urlM = require('url');
var usersNum = 500;
var url = 'http://192.168.1.164';
var http = {};
var countt = 0;
// var http = require('http');?

for(var i=0;i<usersNum;i++){
	http[i] = require('http');
	var timerCur = {};
	timerCur[i] = (new Date()).getTime();
	var curTime = (new Date()).getTime();

	http[i].get({
		hostname: '192.168.1.164',
		path: '/ww?title=test&num='+i+'&curt='+(new Date()).getTime(),
		// path: '/',
		port: 80
	},function(res){
		
		var num = querystring.parse(urlM.parse(res.req.path).query).num;
		var curtime = querystring.parse(urlM.parse(res.req.path).query).curt;
		console.log(curtime);
		var data = '';
		res.on('data',function(chunk){	
			data+=chunk;	
		});
		res.on('end',function(){
			var gapTime = (new Date()).getTime()-curtime;
			console.log(countt++,num,'gaptime',gapTime);
		});
		res.on('error',function(err){
			console.log('err',err);
		});
	});
};

process.on('uncaughtException', function (err) {
    console.log(err);
});