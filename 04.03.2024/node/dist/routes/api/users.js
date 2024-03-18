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
exports.deleteUser = exports.patchUser = exports.createUser = exports.getAllUsers = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany();
        res.json(users);
    });
}
exports.getAllUsers = getAllUsers;
function createUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const newUser = yield prisma.user.create({
            data: {
                email: body.email,
                name: body.name
            },
        });
    });
}
exports.createUser = createUser;
function getUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = parseInt(req.params.id);
        const user = yield prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (user === null) {
            res.status(404);
            res.send('not found');
        }
        else {
            res.json(user);
        }
    });
}
exports.getUser = getUser;
function patchUser(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const userId = parseInt(req.params.id);
        const body = req.body;
        const notUpdated = yield prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (notUpdated !== null) {
            const updatedUser = yield prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    name: (_a = body.name) !== null && _a !== void 0 ? _a : notUpdated.name,
                    email: (_b = body.email) !== null && _b !== void 0 ? _b : notUpdated.email,
                },
            });
        }
    });
}
exports.patchUser = patchUser;
function deleteUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = parseInt(req.params.id);
        const deleteUser = yield prisma.user.delete({
            where: {
                id: userId,
            },
        });
    });
}
exports.deleteUser = deleteUser;
