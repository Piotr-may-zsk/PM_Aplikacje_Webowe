import express, {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../../data";
import {Image} from "../../entity/Image";
import {AccountData} from "../../entity/AccountData";
import {User} from "../../entity/User";
import {updateObject} from "../../heplers/updateObjectHelper";

async function  getAllImages(req:Request, res:Response, next:NextFunction) {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(Image)
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}

async function  createImage(req:Request, res:Response, next:NextFunction) {
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const image = new Image();
            image.name = body.name
            image.path = "Path on server"
            await AppDataSource.manager.save(image)

            res.json({"succes": "yes"})
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  getImage(req:Request, res:Response, next:NextFunction){
    const userId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const imageRepository = AppDataSource.getRepository(Image)
            const result = await imageRepository.findOneBy({id: userId})
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  patchImage(req:Request, res:Response, next:NextFunction){
    const imageId : number= parseInt(req.params.id)
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const imageRepository = AppDataSource.getRepository(Image)
            let result : Image | null = await imageRepository.findOneBy({id: imageId})
            if (result !== null){
                result = updateObject(result, body)
                //@ts-ignore
                await  imageRepository.save(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  deleteImage(req:Request, res:Response, next:NextFunction){
    const imageId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const imageRepository = AppDataSource.getRepository(Image)
            const result =  await imageRepository.findOneBy({id: imageId})
            if (result !== null) {
                await  imageRepository.remove(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
export {getImage, deleteImage, patchImage, getAllImages,createImage };