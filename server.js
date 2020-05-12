//server.js v1.0.1
const config = require ('./config.json');

var http = require('http');
var url = require('url');
var queryString = require('querystring');
var os = require('os');
let containerId = os.hostname();

// app instance settings
config.app_name = process.env.APP_NAME?process.env.APP_NAME:config.app_name;
config.app_version = process.env.APP_VERSION?process.env.APP_VERSION:config.app_version;
config.app_path = process.env.APP_PATH?process.env.APP_PATH:config.app_path;
config.app_version_path = process.env.APP_VERSION_PATH?process.env.APP_VERSION_PATH:config.app_version_path;

let app_name = config.app_name;
let version = config.app_version;
let appPath = config.app_path;
let versionPath = config.app_version_path;

console.log(`config: ${JSON.stringify(config, undefined, config.json_indentation)}`);

var server = http.createServer(function(request, response) {
  var parts = url.parse(request.url); 
  var responseText = "";

  if (parts.pathname === (versionPath)) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(version);
  } else if (parts.pathname.startsWith(appPath)) {
    responseText += app_name + " v" + version + " via hostname/containerId: " + containerId + "\n\n";
    responseText += "Full passed URL: '" + request.url + "'";

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(responseText);
  } else {
  // error handle unknown path, 200 for demo only should use 404 in production
    response.writeHead(404, {'Content-Type': 'text/plain'}); 
    response.end("Endpoint '" + parts.pathname + "' not found... try " + appPath + " or '" + versionPath + "'. Full passed URL: '" + request.url + "'");
  }
});   

server.listen(8080);