function route(handle,path,res){
	console.log('route of'+path);
	if(typeof handle[path]==='function'){
		handle[path](res);
	}else{
		// console.log('404 not found');
		res.writeHead(404,{"Content-Type":"text/html"});
	    res.write("404 Not found");
	    res.end();
	}
};
exports.route = route;