import express, {NextFunction, Request, Response} from "express";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


 async function  getAllUsers(req:Request, res:Response, next:NextFunction) {
     const users = await prisma.user.findMany()
     res.json(users);
}

async function  createUser(req:Request, res:Response, next:NextFunction) {
    const body = req.body
    console.log(body)
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        },
    })
    res.json({'success': true})
}
async function  getUser(req:Request, res:Response, next:NextFunction) {
    const userId : number= parseInt(req.params.id)
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    })
    if (user === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(user);
    }
}
async function  patchUser(req:Request, res:Response, next:NextFunction) {
    const userId : number= parseInt(req.params.id)
    const body = req.body
    const notUpdated = await prisma.user.findFirst({
        where: {
            id: userId
        }
    })
    if (notUpdated !== null) {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                name: body.name ?? notUpdated.name,
                email: body.email ?? notUpdated.email,
            },
        })
    }
    res.json({'success': true})
}
async function  deleteUser(req:Request, res:Response, next:NextFunction) {
    const userId : number= parseInt(req.params.id)
    const deleteUser = await prisma.user.delete({
        where: {
            id: userId,
        },
    })
}
export {getUser,getAllUsers,createUser,patchUser,deleteUser};