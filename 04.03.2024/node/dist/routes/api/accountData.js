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
exports.patchAccountData = exports.deleteAccountData = exports.createAccountData = exports.getAllAccountData = exports.getAccountData = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function getAllAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield prisma.accountData.findMany();
        res.json(userData);
    });
}
exports.getAllAccountData = getAllAccountData;
function createAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const newUser = yield prisma.accountData.create({
            data: {
                address: body.address,
                bio: body.bio,
                user: {
                    connect: { id: body.userId }
                }
            },
        });
        res.json({ "succes": "yes" });
    });
}
exports.createAccountData = createAccountData;
function getAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const acccountID = parseInt(req.params.id);
        const accountData = yield prisma.accountData.findFirst({
            where: {
                id: acccountID
            }
        });
        if (accountData === null) {
            res.status(404);
            res.send('not found');
        }
        else {
            res.json(accountData);
        }
    });
}
exports.getAccountData = getAccountData;
function patchAccountData(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const acccountID = parseInt(req.params.id);
        const body = req.body;
        const notUpdated = yield prisma.accountData.findFirst({
            where: {
                id: acccountID
            }
        });
        if (notUpdated !== null) {
            const updateAccount = yield prisma.accountData.update({
                where: {
                    id: acccountID,
                },
                data: {
                    address: (_a = body.address) !== null && _a !== void 0 ? _a : notUpdated.address,
                    bio: (_b = body.bio) !== null && _b !== void 0 ? _b : notUpdated.bio
                },
            });
        }
    });
}
exports.patchAccountData = patchAccountData;
function deleteAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const acccountID = parseInt(req.params.id);
        const deleteAccountData = yield prisma.accountData.delete({
            where: {
                id: acccountID,
            },
        });
    });
}
exports.deleteAccountData = deleteAccountData;
