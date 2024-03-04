"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
require("reflect-metadata");
var AccountData_1 = require("./entity/AccountData");
var Image_1 = require("./entity/Image");
var Event_1 = require("./entity/Event");
var Post_1 = require("./entity/Post");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "newdb",
    synchronize: true,
    logging: true,
    entities: [User_1.User, AccountData_1.AccountData, Image_1.Image, Event_1.Event, Post_1.Post],
    subscribers: [],
    migrations: [],
});
