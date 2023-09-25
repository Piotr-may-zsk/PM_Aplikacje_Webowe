const http = require('http')

const host = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end("<p>hello world</p>")
})

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port} ...`)
})
