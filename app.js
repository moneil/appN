const http = require('http');
var fs = require("fs");

const hostname = '127.0.0.1';
const port = 6200;

const server = http.createServer((req, res) => {
   if(req.url === "/app2" || req.url === "/app2/index.html" || req.url === "/app2/index.htm" || req.url === "/app2/index"){
      fs.readFile("./public/index.html", function (err, data) {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<b>Oops!</b></br></br>That page does not exist!</br>This is the default response from APP2.</br>Requested URL is: ' + req.url);
      res.end();
   }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});