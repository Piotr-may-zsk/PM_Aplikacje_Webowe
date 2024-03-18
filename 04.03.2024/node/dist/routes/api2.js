"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const promises_1 = __importDefault(require("fs/promises"));
const MongoClient = require("mongodb").MongoClient;
const port = 3000;
const router = express_1.default.Router();
exports.router = router;
function getPassword() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield promises_1.default.readFile('C:\\dev\\PM_Aplikacje_Webowe\\passwords.txt')).toString();
    });
}
function getURL(password) {
    return `mongodb+srv://piotrmay:${password}@zsk.uiyehen.mongodb.net/`;
}
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const url = getURL(yield getPassword());
    const data = {};
    const name = body.name;
    delete body.name;
    try {
        const db = yield MongoClient.connect(url);
        const dbo = yield db.db("node2");
        try {
            yield dbo.collection(name).insertOne(body);
            res.json({ "succeded": "yes" });
        }
        catch (e) {
            throw e;
        }
        yield db.close();
    }
    catch (e) {
        throw e;
    }
}));
