import express from "express";
import fs from 'fs/promises'
import { Request, Response } from 'express';
const MongoClient = require("mongodb").MongoClient

const port = 3000
const router = express.Router()
async function getPassword() {
    return (await fs.readFile('C:\\dev\\PM_Aplikacje_Webowe\\passwords.txt')).toString()
}
function getURL(password:string){
    return `mongodb+srv://piotrmay:${password}@zsk.uiyehen.mongodb.net/`;
}
router.post('/', async (req:express.Request, res: Response, next) => {
    const body = req.body;
    const url =  getURL(await  getPassword())
    const data : Record<string, any> = {}
    const name = body.name
    delete body.name
    try {
        const db = await MongoClient.connect(url)
        const dbo = await db.db("node2")
        try {
            await dbo.collection(name).insertOne(body)
            res.json({"succeded": "yes"})
        } catch (e) {
            throw e
        }
        await db.close()
    } catch (e) { 
        throw e
    }

});



export {router};