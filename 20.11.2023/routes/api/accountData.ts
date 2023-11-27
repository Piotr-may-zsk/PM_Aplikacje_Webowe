import {AppDataSource} from "../../data";
import {AccountData} from "../../entity/AccountData";

import express from "express";

import {updateObject} from "../../heplers/updateObjectHelper";
import {Request, Response, NextFunction} from "express";
const router = express.Router()

async function getAllAccountData (req:Request, res:Response, next:NextFunction) {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(AccountData)
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}

async function createAccountData(req:Request, res:Response, next:NextFunction) {
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const accountData = new AccountData();
            accountData.createdAt = new Date()
            accountData.bio = body.bio
            accountData.address = body.address
            await AppDataSource.manager.save(accountData)


            res.json({"succes": "yes"})
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function getAccountData (req:Request, res:Response, next:NextFunction) {
    const acccountID : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const accountRepository = AppDataSource.getRepository(AccountData)
            const result = await accountRepository.findOneBy({id: acccountID})
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
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