import express, {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../../data";
import {User} from "../../entity/User";
import {updateObject} from "../../heplers/updateObjectHelper";
import {AccountData} from "../../entity/AccountData";



 async function  getAllUsers(req:Request, res:Response, next:NextFunction) {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(User)
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}

async function  createUser(req:Request, res:Response, next:NextFunction) {
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const accountData = new AccountData();
            accountData.createdAt = new Date()
            const user = new User();
            user.firstName = body.firstName
            user.lastName = body.lastName
            user.isActive = false
            await AppDataSource.manager.save(accountData)
            user.accountData = accountData
            await AppDataSource.manager.save(user)

            res.json({"succes": "yes"})
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  getUser(req:Request, res:Response, next:NextFunction) {
    const userId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const userRepository = AppDataSource.getRepository(User)
            const result = await userRepository.findOneBy({id: userId})
            res.json(result)
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  patchUser(req:Request, res:Response, next:NextFunction) {
    const userId : number= parseInt(req.params.id)
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const userRepository = AppDataSource.getRepository(User)
            let result : User | null = await userRepository.findOneBy({id: userId})
            if (result !== null){
                result = updateObject(result, body)
                //@ts-ignore
                await  userRepository.save(result)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
async function  deleteUser(req:Request, res:Response, next:NextFunction) {
    const userId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const userRepository = AppDataSource.getRepository(User)
            const accountRepository = AppDataSource.getRepository(AccountData)
            const result =  await userRepository.findOneBy({id: userId})
            if (result !== null) {
                const accData = result.accountData
                await  userRepository.remove(result)
                await  accountRepository.remove(accData)
                res.json({"succeded": true})
            }
            await AppDataSource.destroy();

        })
        .catch((error) => console.log(error));
}
export {getUser,getAllUsers,createUser,patchUser,deleteUser};