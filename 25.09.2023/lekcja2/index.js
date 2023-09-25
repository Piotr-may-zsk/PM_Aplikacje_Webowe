const http = require('http')
const fs = require('fs').promises
const host = '127.0.0.1'
const port = 3000

const server =  http.createServer((req, res) => {
    
    const html = fs.readFile('./index.html').then((content)=> {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.write(content)
        res.end()
    });
})

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port} ...`)
})
