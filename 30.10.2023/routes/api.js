var express = require('express');
var router = express.Router();
const Student = require('../objects/student')
const Subject = require('../objects/subject')
const Querrys = require('../querrys/querrys')
const data = require('../public/json/api.json')
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

    res.json(data);
});

router.get('/students', (req, res)=> {
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        database: "node",
        password: ''
    });
    var students;
    con.connect(function(err) {
        if (err) throw err;
        con.query(Querrys.selectAllStudents, (e, result)=> {
            if (e) throw err;

            students = JSON.parse(JSON.stringify(result));
            res.setHeader('content-type', 'application/json');
            res.json(students)
        });
    });

})

router.get('/students/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    var result;
    for (var i = 0; i < students.length; i++){
        // look for the entry with a matching `code` value
        if (students[i].id === id){
            result = students[i]
        }
    }
    if (result !== []) {
        res.json(result)
    }
    else {
        res.statusCode = 404
        res.send('not found')
    }
})

router.get('/subjects', (req, res)=> {
    res.json(subjects)
})

router.get('/subjects/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    var result;
    for (var i = 0; i < students.length; i++){
        // look for the entry with a matching `code` value
        if (subjects[i].id === id){
            result = subjects[i]
        }
    }
    if (result !== []) {
        res.json(result)
    }
    else {
        res.statusCode = 404
        res.send('not found')
    }
})

module.exports = router;
