import express, {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../../data";
import {AccountData} from "../../entity/AccountData";
import {User} from "../../entity/User";
import {updateObject} from "../../heplers/updateObjectHelper";
import {Post} from "../../entity/Post";
import {Image} from "../../entity/Image";

async function getAllPosts(req:Request, res:Response, next:NextFunction){
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(Post)
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function createPost (req:Request, res:Response, next:NextFunction)  {
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const post = new Post();
            const userRepository = AppDataSource.getRepository(User)
            const imageRepository = AppDataSource.getRepository(Image)
            post.content = body.content
            post.owner = await userRepository.findOneBy({id: body.owner}) ?? new User()
            post.image = await imageRepository.findOneBy({id: body.image})?? new Image()
            post.title = body.title
            await AppDataSource.manager.save(post)

            res.json({"succes": "yes"})
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function getPost (req:Request, res:Response, next:NextFunction) {
    const postId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const postRepository = AppDataSource.getRepository(Post)
            const result = await postRepository.findOneBy({id: postId})
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  patchPost(req:Request, res:Response, next:NextFunction) {
    const postId : number= parseInt(req.params.id)
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const postRepository = AppDataSource.getRepository(Post)
            let result : Post | null = await postRepository.findOneBy({id: postId})
            if (result !== null){
                result = updateObject(result, body)
                if (body.image !== undefined&& result !== null){
                    const imageRepository = AppDataSource.getRepository(Image)
                    result.image = await imageRepository.findOneBy({id: body.image}) ?? new Image()
                }
                //@ts-ignore
                await  postRepository.save(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function deletePost(req:Request, res:Response, next:NextFunction) {
    const postId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const postRepository = AppDataSource.getRepository(Post)
            const result =  await postRepository.findOneBy({id: postId})
            if (result !== null) {
                await  postRepository.remove(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
export {getAllPosts, getPost, createPost, patchPost, deletePost};