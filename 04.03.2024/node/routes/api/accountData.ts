import { PrismaClient } from '@prisma/client'


import express from "express";

import {Request, Response, NextFunction} from "express";
const router = express.Router()
const prisma = new PrismaClient()

async function getAllAccountData (req:Request, res:Response, next:NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    const userData = await prisma.accountData.findMany()
    res.json(userData);
}

async function createAccountData(req:Request, res:Response, next:NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    const body = req.body
    const newUser = await prisma.accountData.create({
        data: {
            address: body.address,
            bio: body.bio,
            user:
                {
                    connect:  {id: body.userId}
                }
        },
    })
    res.json({"succes": "yes"})

}
async function getAccountData (req:Request, res:Response, next:NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    const acccountID : number= parseInt(req.params.id)
    const accountData = await prisma.accountData.findFirst({
        where: {
            id: acccountID
        }
    })
    if (accountData === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(accountData);
    }
}
async function patchAccountData(req:Request, res:Response, next:NextFunction)  {
    const acccountID : number= parseInt(req.params.id)
    const body = req.body
    const notUpdated = await prisma.accountData.findFirst({
        where: {
            id: acccountID
        }
    })
    if (notUpdated !== null) {
        const updateAccount = await prisma.accountData.update({
            where: {
                id: acccountID,
            },
            data: {
                address:  body.address ?? notUpdated.address,
                bio: body.bio ??  notUpdated.bio
            },
        })
    }
}
async function deleteAccountData(req:Request, res:Response, next:NextFunction)  {
    const acccountID : number= parseInt(req.params.id)
    const deleteAccountData = await prisma.accountData.delete({
        where: {
            id: acccountID,
        },
    })
}


export {getAccountData, getAllAccountData, createAccountData, deleteAccountData,patchAccountData};