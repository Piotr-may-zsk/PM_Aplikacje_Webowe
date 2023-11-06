var express = require('express');
const mysql = require("mysql");
// const Querrys = require("../querrys/querrys.js");
const prismaClient = require("@prisma/client");
const router = express.Router()

const prisma = new prismaClient.PrismaClient()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.render('kontakt');
})

router.post('/', async (req, res) => {
    console.log("Dane z formularza: ")
    const body = req.body;
    const user = await prisma.form_data.create({
        data: {
            subject: body.subject,
            name: body.name,
            content: body.content,
            email: body.email,

        },
    }).then(async () => {
        await prisma.$disconnect()
        res.redirect('/')
    })

        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
})

module.exports = router;