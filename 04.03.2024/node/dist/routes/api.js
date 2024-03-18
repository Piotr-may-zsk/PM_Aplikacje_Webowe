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
const posts_1 = require("./api/posts");
const updateObjectHelper_1 = require("../heplers/updateObjectHelper");
const users_1 = require("./api/users");
const accountData_1 = require("./api/accountData");
const images_1 = require("./api/images");
const events_1 = require("./api/events");
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ 'api': 'working' });
}));
router.get('/posts/', posts_1.getAllPosts);
router.get('/posts/:id', posts_1.getPost);
router.post('/posts/:id', posts_1.createPost);
router.patch('/posts/:id', updateObjectHelper_1.updateObject);
router.delete('/posts/:id', posts_1.deletePost);
router.get('/users/', users_1.getAllUsers);
router.get('/users/:id', users_1.getUser);
router.post('/users/:id', users_1.createUser);
router.patch('/users/:id', users_1.patchUser);
router.delete('/users/:id', users_1.deleteUser);
router.get('/accountdata/', accountData_1.getAllAccountData);
router.get('/accountdata/:id', accountData_1.getAccountData);
router.post('/accountdata/:id', accountData_1.createAccountData);
router.patch('/accountdata/:id', accountData_1.patchAccountData);
router.delete('/accountdata/:id', accountData_1.deleteAccountData);
router.get('/images/', images_1.getAllImages);
router.get('/images/:id', images_1.getImage);
router.post('/images/:id', images_1.createImage);
router.patch('/images/:id', images_1.patchImage);
router.delete('/images/:id', images_1.deleteImage);
router.get('/events/', events_1.getAllEvents);
router.get('/events/:id', events_1.getEvent);
router.post('/events/:id', events_1.createEvent);
router.patch('/events/:id', events_1.patchEvent);
router.delete('/events/:id', events_1.deleteEvent);
