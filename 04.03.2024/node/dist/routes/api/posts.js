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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.patchPost = exports.createPost = exports.getPost = exports.getAllPosts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllPosts(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany();
        res.json(posts);
    });
}
exports.getAllPosts = getAllPosts;
function createPost(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const newPost = yield prisma.post.create({
            data: {
                title: body.name,
                content: body.path,
                owner: {
                    connect: {
                        id: body.userId
                    }
                },
                image: {
                    connect: { id: body.imageId }
                }
            },
        });
    });
}
exports.createPost = createPost;
function getPost(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const postId = parseInt(req.params.id);
        const post = yield prisma.post.findFirst({
            where: {
                id: postId
            }
        });
        if (post === null) {
            res.status(404);
            res.send('not found');
        }
        else {
            res.json(post);
        }
    });
}
exports.getPost = getPost;
function patchPost(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const postId = parseInt(req.params.id);
        const body = req.body;
        const notUpdated = yield prisma.post.findFirst({
            where: {
                id: postId
            }
        });
        if (notUpdated !== null) {
            const updatedPost = yield prisma.post.update({
                where: {
                    id: postId,
                },
                data: {
                    title: (_a = body.title) !== null && _a !== void 0 ? _a : notUpdated.title,
                    content: (_b = body.content) !== null && _b !== void 0 ? _b : notUpdated.content,
                },
            });
        }
    });
}
exports.patchPost = patchPost;
function deletePost(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const postId = parseInt(req.params.id);
        const deletePost = yield prisma.post.delete({
            where: {
                id: postId,
            },
        });
    });
}
exports.deletePost = deletePost;
