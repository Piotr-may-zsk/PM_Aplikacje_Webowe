import express, {NextFunction, Request, Response} from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function  getAllImages(req:Request, res:Response, next:NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    const images = await prisma.image.findMany()
    res.json(images);
}

async function  createImage(req:Request, res:Response, next:NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    const body = req.body
    console.log(body)
    const newImage = await prisma.image.create({
        data: {
            name: body.name,
            path: body.path,
        },
    })
    res.send('success')
}
async function  getImage(req:Request, res:Response, next:NextFunction){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    const imageId : number= parseInt(req.params.id)
    const image = await prisma.image.findFirst({
        where: {
            id: imageId
        }
    })
    if (image === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(image);
    }
}
async function  patchImage(req:Request, res:Response, next:NextFunction){
    const imageId : number= parseInt(req.params.id)
    const body = req.body
    const notUpdated = await prisma.image.findFirst({
        where: {
            id: imageId
        }
    })
    if (notUpdated !== null) {
        const updateImage = await prisma.image.update({
            where: {
                id: imageId,
            },
            data: {
                path: body.path ?? notUpdated.path,
                name: body.name ?? notUpdated.name,
            },
        })
    }

}
async function  deleteImage(req:Request, res:Response, next:NextFunction){
    const imageId : number= parseInt(req.params.id)
    const deleteImage = await prisma.image.delete({
        where: {
            id: imageId,
        },
    })
}
export {getImage, deleteImage, patchImage, getAllImages,createImage };