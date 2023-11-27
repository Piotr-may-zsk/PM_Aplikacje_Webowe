import express from "express";
import {AppDataSource} from "../../data";
import {Event} from "../../entity/Event";
import {AccountData} from "../../entity/AccountData";
import {User} from "../../entity/User";
import {updateObject} from "../../heplers/updateObjectHelper";
import {Request, Response, NextFunction} from "express";

const router = express.Router()

async function  getAllEvents(req: Request, res:Response, next:NextFunction) {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(Event)
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  createEvent (req: Request, res:Response, next:NextFunction)  {
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const event = new Event();
            event.date = body.date
            event.name = body.name
            event.location = body.location
            await AppDataSource.manager.save(event)

            res.json({"succes": "yes"})
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  getEvent (req: Request, res:Response, next:NextFunction) {
    const eventId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const eventRepository = AppDataSource.getRepository(Event)
            const result = await eventRepository.findOneBy({id: eventId})
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  patchEvent (req: Request, res:Response, next:NextFunction)  {
    const eventId : number= parseInt(req.params.id)
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const eventRepository = AppDataSource.getRepository(Event)
            let result : Event | null = await eventRepository.findOneBy({id: eventId})
            if (result !== null){
                result = updateObject(result, body)
                //@ts-ignore
                await  eventRepository.save(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  deleteEvent(req: Request, res:Response, next:NextFunction){
    const eventId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const eventRepository = AppDataSource.getRepository(Event)
            const result =  await eventRepository.findOneBy({id: eventId})
            if (result !== null) {
                await  eventRepository.remove(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
export {getEvent,getAllEvents,deleteEvent,patchEvent,createEvent};