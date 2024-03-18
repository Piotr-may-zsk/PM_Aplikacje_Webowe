import express from "express";
import {Request, Response, NextFunction} from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

async function  getAllEvents(req: Request, res:Response, next:NextFunction) {
    const events = await prisma.event.findMany()
    res.json(events);
}
async function  createEvent (req: Request, res:Response, next:NextFunction)  {
    const body = req.body
    const newEvent = await prisma.event.create({
        data: {
            date: body.date,
            name: body.name,
            location: body.location
        },
    })
    res.json({"succes": "yes"})
}
async function  getEvent (req: Request, res:Response, next:NextFunction) {
    const eventId : number= parseInt(req.params.id)
    const event = await prisma.event.findFirst({
        where: {
            id: eventId
        }
    })
    if (event === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(event);
    }
}
async function  patchEvent (req: Request, res:Response, next:NextFunction)  {
    const eventId : number= parseInt(req.params.id)
    const body = req.body
    const notUpdated = await prisma.event.findFirst({
        where: {
            id: eventId
        }
    })
    if (notUpdated !== null) {
        const updateAccount = await prisma.event.update({
            where: {
                id: eventId,
            },
            data: {
                date: body.date ?? notUpdated.date,
                name: body.name ?? notUpdated.name,
                location: body.location ?? notUpdated.location
            },
        })
    }

}
async function  deleteEvent(req: Request, res:Response, next:NextFunction){
    const eventId : number= parseInt(req.params.id)
    const deleteEvent = await prisma.event.delete({
        where: {
            id: eventId,
        },
    })
}
export {getEvent,getAllEvents,deleteEvent,patchEvent,createEvent};