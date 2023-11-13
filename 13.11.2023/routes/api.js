var express = require('express');
var router = express.Router();
const Student = require('../objects/student')
const Subject = require('../objects/subject')
const Querrys = require('../querrys/querrys.js')
const apitDocumentatiob = require('../public/json/api.json')
const MongoClient = require("mongodb").MongoClient
const fs = require('fs/promises')
async function getPassword() {
    return (await fs.readFile('C:\\dev\\PM_Aplikacje_Webowe\\passwords.txt')).toString()
}
function getURL(password){
    return `mongodb+srv://piotrmay:${password}@zsk.uiyehen.mongodb.net/`;
}
/* GET home page. */
// const students = []
// for (var i = 1; i<=10;i++){
//     students.push(new Student(i,'Jan','Nowak','jan@wp.pl'))
// }
//
// const subjects = []
// for (var i = 1; i<=10;i++){
//     subjects.push(new Subject(i,'Matematyka',Math.ceil(Math.random() * 10)))
// }
router.get('/', async (req, res, next) => {

    res.json(apitDocumentatiob);
});

router.get('/students', async (req, res)=> {
    const password = await getPassword()
    const url = getURL(password)
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node1")
        const students = await  dbo.collection('students').find().toArray()
        res.json(students)
        await db.close()
    } catch (e) {
        throw e
    }
})

router.get('/students/:id', async(req, res)=> {
    const id = parseInt(req.params.id)
    const password = await getPassword()
    const url = getURL(password)
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node1")
        const query = {'id': id}
        const students = await  dbo.collection('students').find(query).toArray()
        if (students.length===0) {
            res.status(404)
            res.send('not found')
        } else {
            res.json(students[0]);
        }
        await db.close()
    } catch (e) {
        throw e
    }
})

router.get('/subjects', async (req, res)=> {
    const password = await getPassword()
    const url = getURL(password)
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node1")
        const subjects = await  dbo.collection('subjects').find().toArray()
        res.json(subjects)
        await db.close()
    } catch (e) {
        throw e
    }
})

router.get('/subjects/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const password = await getPassword()
    const url = getURL(password)
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node1")
        const query = {'id': id}
        const subjects = await  dbo.collection('subjects').find(query).toArray()
        if (subjects.length===0) {
            res.status(404)
            res.send('not found')
        } else {
            res.json(subjects[0]);
        }
        await db.close()
    } catch (e) {
        throw e
    }
})

router.get('/messages', async (req, res)=> {
    const password = await getPassword()
    const url = getURL(password)
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node1")
        const subjects = await  dbo.collection('contact').find().toArray()
        res.json(subjects)
        await db.close()
    } catch (e) {
        throw e
    }
})

module.exports = router;
