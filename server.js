//server.js v1.0.1
const config = require ('./config.json');

var http = require('http');
var url = require('url');
var queryString = require('querystring');
var os = require('os');
let containerId = os.hostname();

// app instance settings
let name = config.app_name;
let version = config.app_version;
let rootPath = config.app_root_path;
let versionPath = config.app_version_path;

console.log(`config: ${JSON.stringify(config, undefined, config.json_indentation)}`);

var server = http.createServer(function(request, response) {



  var parts = url.parse(request.url); 
  var responseText = "";

  if (parts.pathname === (rootPath + versionPath)) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(version);
  } else if (parts.pathname.startsWith(rootPath)) {
    responseText += name + " v" + version + " via hostname/containerId: " + containerId + "\n\n";
    responseText += "Full passed URL: '" + request.url + "'";

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(responseText);
  } else {
  // error handle unknown path, 200 for demo only should use 404 in production
    response.writeHead(404, {'Content-Type': 'text/plain'}); 
    response.end("Endpoint '" + parts.pathname + "' not found... try " + rootPath + "or '" + rootPath + versionPath + "'. Full passed URL: '" + request.url + "'");
  }
});

server.listen(8080);