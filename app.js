const http = require('http');

const hostname = '127.0.0.1';
const port = 6200;

const server = http.createServer((req, res) => {
   
  if(req.url === "/index"){
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