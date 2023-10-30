var express = require('express');
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
    for (const key in req.body) {
        console.log(key + ": " + req.body[key] + ", ")
    }
    res.redirect('/');
}) 

module.exports = router;