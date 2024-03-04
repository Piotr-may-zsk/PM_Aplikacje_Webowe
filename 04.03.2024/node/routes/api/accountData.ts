import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import express from "express";

import {updateObject} from "../../heplers/updateObjectHelper";
import {Request, Response, NextFunction} from "express";
const router = express.Router()

async function getAllAccountData (req:Request, res:Response, next:NextFunction) {
    const userData = await prisma.accountData.findMany()
    res.json(userData);
}

async function createAccountData(req:Request, res:Response, next:NextFunction) {
    const body = req.body
    const newUser = await prisma.accountData.create({
        data: {
            createdAt: new Date(),
            address: body.address,
            bio: body.bio
        },
    })
    res.json({"succes": "yes"})

}
async function getAccountData (req:Request, res:Response, next:NextFunction) {
    const acccountID : number= parseInt(req.params.id)
    const student = await prisma.accountData.findFirst({
        where: {
            id: acccountID
        }
    })
    if (student === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(student);
    }
}
async function patchAccountData(req:Request, res:Response, next:NextFunction)  {
    const acccountID : number= parseInt(req.params.id)
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const accountRepository = AppDataSource.getRepository(AccountData)
            let result : AccountData | null = await accountRepository.findOneBy({id: acccountID})
            if (result !== null){
                result = updateObject(result, body)
                //@ts-ignore
                await  accountRepository.save(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function deleteAccountData(req:Request, res:Response, next:NextFunction)  {
    const acccountID : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const accountRepository = AppDataSource.getRepository(AccountData)
            const result =  await accountRepository.findOneBy({id: acccountID})
            if (result !== null) {
                await  accountRepository.remove(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}


export {getAccountData, getAllAccountData, createAccountData, deleteAccountData,patchAccountData};