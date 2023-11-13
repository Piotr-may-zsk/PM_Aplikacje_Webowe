var express = require('express');
const fs = require("fs/promises");
const MongoClient = require("mongodb").MongoClient
// const Querrys = require("../querrys/querrys.js");

const router = express.Router()

async function getPassword() {
    return (await fs.readFile('C:\\dev\\PM_Aplikacje_Webowe\\passwords.txt')).toString()
}
function getURL(password){
    return `mongodb+srv://piotrmay:${password}@zsk.uiyehen.mongodb.net/`;
}

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('kontakt');
})

router.post('/', async (req, res) => {
    const body = req.body;
    const url =  getURL(await  getPassword())
    const data =  {
        subject: body.subject,
        content: body.content,
        email: body.email
    }
    console.log(body.name)
    if (body.name !== undefined && body.name !== null&& body.name !== '') {
        data['name'] = body.name;
    }
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node1")
        try {
            await dbo.collection("contact").insertOne(data)
            res.redirect('/')
        } catch (e) {
            throw e
        }
        await db.close()
    } catch (e) {
        throw e
    }
})

module.exports = router;