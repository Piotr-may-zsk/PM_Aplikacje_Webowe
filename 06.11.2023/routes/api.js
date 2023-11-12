var express = require('express');
var router = express.Router();
const Student = require('../objects/student')
const Subject = require('../objects/subject')
const Querrys = require('../querrys/querrys.js')
const apitDocumentatiob = require('../public/json/api.json')
const prismaClient = require("@prisma/client");
const prisma = new prismaClient.PrismaClient()

/* GET home page. */
const mysql = require('mysql')
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
    const students = await prisma.students.findMany()
    res.json(students);
})

router.get('/students/:id', async(req, res)=> {
    const id = parseInt(req.params.id)
    const student = await prisma.students.findFirst({
        where: {
            id: id
        }
    })
    if (student === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(student);

    }
})

router.get('/subjects', async (req, res)=> {
    const subjects = await prisma.subjects.findMany()
    res.json(subjects);
})

router.get('/subjects/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const subject = await prisma.subjects.findFirst({
        where: {
            id: id
        }
    })
    if (subject === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(subject);

    }

})

module.exports = router;
