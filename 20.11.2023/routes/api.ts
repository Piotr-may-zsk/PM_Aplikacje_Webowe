import express from "express";
import {AppDataSource} from "../data";
import {User} from "../entity/User";
import {AccountData} from "../entity/AccountData";
import {Event} from "../entity/Event";
import {Image} from "../entity/Image";
import {Post} from "../entity/Post";

const port = 3000
const router = express.Router()
router.get('/', async (req, res, next) => {


    res.json({'api': 'working'});
});

router.get('/users', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(User)
            res.json(result)
        })
        .catch((error) => console.log(error));
})
router.get('/users/:id', async (req, res, next) => {
    const userId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const userRepository = AppDataSource.getRepository(User)
            const result = await userRepository.findOneBy({id: userId})
            res.json(result)
        })
        .catch((error) => console.log(error));
})
router.patch('/users/:id', async (req, res, next) => {
    const userId : number= parseInt(req.params.id)
    const body = req.body
    AppDataSource.initialize()
        .then(async () => {
            const userRepository = AppDataSource.getRepository(User)
            const result : User | null = await userRepository.findOneBy({id: userId})
            if (result !== null){
                Object.entries(body).forEach(
                    ([key, value]) => {
                        if (result[key]!== undefined){
                            result[key] = value
                        }
                    }
                );

                await  userRepository.save(result)
                res.json({"succeded": true})
            }

        })
        .catch((error) => console.log(error));
})
router.delete('/users/:id', async (req, res, next) => {
    const userId : number= parseInt(req.params.id)
    AppDataSource.initialize()
        .then(async () => {
            const userRepository = AppDataSource.getRepository(User)
            const result =  await userRepository.findOneBy({id: userId})
            if (result !== null) {
                await  userRepository.remove(result)
                res.json({"succeded": true})
            }

        })
        .catch((error) => console.log(error));
})
router.get('/accountData', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(AccountData)
            res.json(result)
        })
        .catch((error) => console.log(error));
})

router.get('/posts', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(Post)
            res.json(result)
        })
        .catch((error) => console.log(error));
})

router.get('/images', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(Image)
            res.json(result)
        })
        .catch((error) => console.log(error));
})

router.get('/events', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(Event)
            res.json(result)
        })
        .catch((error) => console.log(error));
})

router.get('/users', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
            const result = await AppDataSource.manager.find(User)
            res.json(result)
        })
        .catch((error) => console.log(error));
})


export {router};