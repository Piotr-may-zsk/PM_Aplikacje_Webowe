import express, { Express, Request, Response } from 'express';
import {router as APIRouter}  from './routes/api'
import {AppDataSource} from "./data";
import {User} from "./entity/User";

const app: Express = express();
const port = 3000;

app.use('/api',APIRouter)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})