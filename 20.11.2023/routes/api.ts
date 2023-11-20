import express from "express";
import {AppDataSource} from "../data";
import {User} from "../entity/User";

const port = 3000
const router = express.Router()
router.get('/', async (req, res, next) => {
    AppDataSource.initialize()
        .then(async () => {
// here you can start to work with your database
            const user = new User()
            user.firstName = "Jan"
            user.lastName = "Jan"
            user.isActive = false


            await AppDataSource.manager.save(user)
        })
        .catch((error) => console.log(error));

    res.json({'api': 'working'});
});

export {router};