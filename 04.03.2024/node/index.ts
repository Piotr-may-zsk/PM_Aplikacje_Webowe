import express, { Express, Request, Response } from 'express';
import {router as APIRouter}  from './routes/api'
import {router as API2Router}  from './routes/api2'
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use('/api',APIRouter)
app.use('/api2',API2Router)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})