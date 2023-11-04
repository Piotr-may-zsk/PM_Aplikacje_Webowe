var express = require('express');
const mysql = require("mysql");
const Querrys = require("../querrys/querrys");
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('kontakt');
})

router.post('/', (req, res) => {
    console.log("Dane z formularza: ")
    const body = req.body;
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        database: "node",
        password: ''
    });
    con.connect(function(err) {
        if (err) throw err;
        con.query(Querrys.saveContactData(body['name'], body['email'], body['subject'], body['content']), (e, result)=> {
            if (e) throw err;

            if (result.length !==0) {
                res.redirect('/');

            }
            else {
                res.statusCode = 500
                res.send('Error occured')
            }
        });
    });
})

module.exports = router;