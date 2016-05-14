var serverStart = require('./server');
var route = require('./route');
var reqHandlers = require('./reqHandlers');

var handle = new Object;
handle['/'] = reqHandlers.start;
handle['/start'] = reqHandlers.start;
handle['/test'] = reqHandlers.test;

serverStart.server(route.route,handle);