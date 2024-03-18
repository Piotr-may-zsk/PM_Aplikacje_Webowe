import express, {NextFunction, Request, Response} from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function getAllPosts(req:Request, res:Response, next:NextFunction){
    const posts = await prisma.post.findMany()
    res.json(posts);
}
async function createPost (req:Request, res:Response, next:NextFunction)  {
    const body = req.body
    const newPost = await prisma.post.create({
        data: {
            title: body.name,
            content: body.path,
            owner: {
                connect:{
                    id: body.userId
                }
            },
            image:{
                connect: { id: body.imageId}
            }
        },
    })
}
async function getPost (req:Request, res:Response, next:NextFunction) {
    const postId : number= parseInt(req.params.id)
    const post = await prisma.post.findFirst({
        where: {
            id: postId
        }
    })
    if (post === null) {
        res.status(404)
        res.send('not found')
    } else {
        res.json(post);
    }
}
async function  patchPost(req:Request, res:Response, next:NextFunction) {
    const postId : number= parseInt(req.params.id)
    const body = req.body
    const notUpdated = await prisma.post.findFirst({
        where: {
            id: postId
        }
    })
    if (notUpdated !== null) {
        const updatedPost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                title: body.title ?? notUpdated.title,
                content: body.content ?? notUpdated.content,
            },
        })
    }

}
async function deletePost(req:Request, res:Response, next:NextFunction) {
    const postId : number= parseInt(req.params.id)
    const deletePost = await prisma.post.delete({
        where: {
            id: postId,
        },
    })
}
export {getAllPosts, getPost, createPost, patchPost, deletePost};