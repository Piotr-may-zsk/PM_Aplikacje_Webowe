const http = require('http')
const fs = require('fs/promises')


const port = 8081
const host = "127.0.0.1"

const server = http.createServer(async (req, res) => {
    const url = req.url ?? '/'
    const method = req.method ?? 'GET'

    if (url==='/'){
        res.setHeader('content-type', 'text/html')
        res.statusCode = 200
        const html = await fs.readFile('index.html')
        res.write(html)
        res.end()
    }
    else if (url==='/dziekujemy'){
        res.setHeader('content-type', 'text/html')
        res.statusCode = 200
        const html = await fs.readFile('thanks.html')
        res.write(html)
        res.end()
    }
    else if (url==='/api'){
        function Worker(name, surname, age) {
            this.name = name
            this.surname = surname
            this.age = age
        }
        const w1 = new Worker('Janusz', 'Cebula', 25)
        const w2 = new Worker('Karol', 'Nowak', 55)
        const w3 = new Worker('Janusz', 'Inny', 75)
        const workers = [w1,w2,w3]

        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(workers))
        res.end()
    }
    else if (url==='/kontakt' && method =='POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk.toString())
            body.push(chunk)
        })

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await fs.writeFile(`./contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        })
    }
    else {
        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
        res.write('{"error": "404 this page does not exist"}')
        res.end()
    }
})

server.listen(port, host, ()=> {
    console.log(`Server listening at http://${host}:${port} ...`)
});