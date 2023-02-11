const http = require('http')
const hmls = require('./index.html')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(hmls)
    res.end()
}).listen(8010)