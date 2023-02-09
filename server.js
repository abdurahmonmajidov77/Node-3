const http = require('http')
const { url } = require('inspector')

// http.createServer(function(req,res){
//     res.write('Hello Abdulloh!')
//     res.end()
// }).listen(8010)

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     const q = url.parse(req.url, true).query
//     console.log(req);
//     const txt = q.year+''+q.month
//     res.end(txt)
// }).listen(8010)

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<html><body><h1>This is homePage</h1></body></html>')
    res.end()
}).listen(8010)