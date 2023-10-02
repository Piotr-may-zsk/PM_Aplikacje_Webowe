const http = require('http')
const fs = require('fs/promises')


const port = 8080
const host = "127.0.0.1"

const server = http.createServer(async (req, res) => {
    const url = req.url ?? '/'
    const method = req.method ?? 'GET'

    if (url==='/'){
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200
        const html = await fs.readFile('index.html')
        res.write(html)
        res.end()
    }
    else if (url==='/dziekujemy'){
        res.setHeader('Content-Type', 'text/html')
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
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify(workers))
        res.end()
    }
    else if (url==='kontakt' && method =='POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk.toString())
            body.push(chunk)
        })
        res.statusCode = 202
        res.write(body)
        res.end()
    }
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/json')
        res.write('{error: 404}')
        res.end()
    }
})

server.listen(port, host, ()=> {
    console.log(`Server listening at http://${host}:${port} ...`)
});