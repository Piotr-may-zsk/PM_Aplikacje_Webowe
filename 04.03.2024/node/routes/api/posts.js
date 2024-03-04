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
exports.deletePost = exports.patchPost = exports.createPost = exports.getPost = exports.getAllPosts = void 0;
var data_1 = require("../../data");
var User_1 = require("../../entity/User");
var updateObjectHelper_1 = require("../../heplers/updateObjectHelper");
var Post_1 = require("../../entity/Post");
var Image_1 = require("../../entity/Image");
function getAllPosts(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_1.AppDataSource.manager.find(Post_1.Post)];
                        case 1:
                            result = _a.sent();
                            res.json(result);
                            return [4 /*yield*/, data_1.AppDataSource.destroy()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) { return console.log(error); });
            return [2 /*return*/];
        });
    });
}
exports.getAllPosts = getAllPosts;
function createPost(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var body;
        var _this = this;
        return __generator(this, function (_a) {
            body = req.body;
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var post, userRepository, imageRepository, _a, _b;
                var _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            post = new Post_1.Post();
                            userRepository = data_1.AppDataSource.getRepository(User_1.User);
                            imageRepository = data_1.AppDataSource.getRepository(Image_1.Image);
                            post.content = body.content;
                            _a = post;
                            return [4 /*yield*/, userRepository.findOneBy({ id: body.owner })];
                        case 1:
                            _a.owner = (_c = _e.sent()) !== null && _c !== void 0 ? _c : new User_1.User();
                            _b = post;
                            return [4 /*yield*/, imageRepository.findOneBy({ id: body.image })];
                        case 2:
                            _b.image = (_d = _e.sent()) !== null && _d !== void 0 ? _d : new Image_1.Image();
                            post.title = body.title;
                            return [4 /*yield*/, data_1.AppDataSource.manager.save(post)];
                        case 3:
                            _e.sent();
                            res.json({ "succes": "yes" });
                            return [4 /*yield*/, data_1.AppDataSource.destroy()];
                        case 4:
                            _e.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) { return console.log(error); });
            return [2 /*return*/];
        });
    });
}
exports.createPost = createPost;
function getPost(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var postId;
        var _this = this;
        return __generator(this, function (_a) {
            postId = parseInt(req.params.id);
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var postRepository, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            postRepository = data_1.AppDataSource.getRepository(Post_1.Post);
                            return [4 /*yield*/, postRepository.findOneBy({ id: postId })];
                        case 1:
                            result = _a.sent();
                            res.json(result);
                            return [4 /*yield*/, data_1.AppDataSource.destroy()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) { return console.log(error); });
            return [2 /*return*/];
        });
    });
}
exports.getPost = getPost;
function patchPost(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var postId, body;
        var _this = this;
        return __generator(this, function (_a) {
            postId = parseInt(req.params.id);
            body = req.body;
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var postRepository, result, imageRepository, _a;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            postRepository = data_1.AppDataSource.getRepository(Post_1.Post);
                            return [4 /*yield*/, postRepository.findOneBy({ id: postId })];
                        case 1:
                            result = _c.sent();
                            if (!(result !== null)) return [3 /*break*/, 5];
                            result = (0, updateObjectHelper_1.updateObject)(result, body);
                            if (!(body.image !== undefined && result !== null)) return [3 /*break*/, 3];
                            imageRepository = data_1.AppDataSource.getRepository(Image_1.Image);
                            _a = result;
                            return [4 /*yield*/, imageRepository.findOneBy({ id: body.image })];
                        case 2:
                            _a.image = (_b = _c.sent()) !== null && _b !== void 0 ? _b : new Image_1.Image();
                            _c.label = 3;
                        case 3: 
                        //@ts-ignore
                        return [4 /*yield*/, postRepository.save(result)];
                        case 4:
                            //@ts-ignore
                            _c.sent();
                            res.json({ "succeded": true });
                            _c.label = 5;
                        case 5: return [4 /*yield*/, data_1.AppDataSource.destroy()];
                        case 6:
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) { return console.log(error); });
            return [2 /*return*/];
        });
    });
}
exports.patchPost = patchPost;
function deletePost(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var postId;
        var _this = this;
        return __generator(this, function (_a) {
            postId = parseInt(req.params.id);
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var postRepository, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            postRepository = data_1.AppDataSource.getRepository(Post_1.Post);
                            return [4 /*yield*/, postRepository.findOneBy({ id: postId })];
                        case 1:
                            result = _a.sent();
                            if (!(result !== null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, postRepository.remove(result)];
                        case 2:
                            _a.sent();
                            res.json({ "succeded": true });
                            _a.label = 3;
                        case 3: return [4 /*yield*/, data_1.AppDataSource.destroy()];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) { return console.log(error); });
            return [2 /*return*/];
        });
    });
}
exports.deletePost = deletePost;
