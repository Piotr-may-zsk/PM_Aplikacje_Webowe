import express, { Express, Request, Response } from 'express';
import {router as APIRouter}  from './routes/api'
import {router as API2Router}  from './routes/api2'
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'content-type');

    // Pass to next layer of middleware
    next();
});
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