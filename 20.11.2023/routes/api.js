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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var posts_1 = require("./api/posts");
var updateObjectHelper_1 = require("../heplers/updateObjectHelper");
var users_1 = require("./api/users");
var accountData_1 = require("./api/accountData");
var images_1 = require("./api/images");
var events_1 = require("./api/events");
var router = express_1.default.Router();
exports.router = router;
router.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json({ 'api': 'working' });
        return [2 /*return*/];
    });
}); });
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
