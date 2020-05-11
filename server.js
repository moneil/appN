//server.js
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var os = require('os');
let name = '_APP_2';
let version = '1.0';
let containerId = os.hostname();


var server = http.createServer(function(request, response) {
  
  var parts = url.parse(request.url); 
  var responseText = "";

  if (parts.pathname === '/app2/version') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(version);
  } else if (parts.pathname.startsWith('/app2')) {
    responseText += name + " v" + version + " via hostname/containerId: " + containerId + "\n\n";
    responseText += "Full passed URL: '" + request.url + "'";

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(responseText);
  } else {
  // error handle unknown path, 200 for demo only should use 404 in production
    response.writeHead(404, {'Content-Type': 'text/plain'}); 
    response.end("Endpoint '" + parts.pathname + "' not found... try '/app2' or '/app2/version'. Full passed URL: '" + request.url + "'");
  }
});

server.listen(8080);