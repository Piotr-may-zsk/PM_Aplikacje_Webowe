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
exports.createImage = exports.getAllImages = exports.patchImage = exports.deleteImage = exports.getImage = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllImages(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const images = yield prisma.image.findMany();
        res.json(images);
    });
}
exports.getAllImages = getAllImages;
function createImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const newImage = yield prisma.image.create({
            data: {
                name: body.name,
                path: body.path,
            },
        });
    });
}
exports.createImage = createImage;
function getImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageId = parseInt(req.params.id);
        const image = yield prisma.image.findFirst({
            where: {
                id: imageId
            }
        });
        if (image === null) {
            res.status(404);
            res.send('not found');
        }
        else {
            res.json(image);
        }
    });
}
exports.getImage = getImage;
function patchImage(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const imageId = parseInt(req.params.id);
        const body = req.body;
        const notUpdated = yield prisma.image.findFirst({
            where: {
                id: imageId
            }
        });
        if (notUpdated !== null) {
            const updateImage = yield prisma.image.update({
                where: {
                    id: imageId,
                },
                data: {
                    path: (_a = body.path) !== null && _a !== void 0 ? _a : notUpdated.path,
                    name: (_b = body.name) !== null && _b !== void 0 ? _b : notUpdated.name,
                },
            });
        }
    });
}
exports.patchImage = patchImage;
function deleteImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageId = parseInt(req.params.id);
        const deleteImage = yield prisma.image.delete({
            where: {
                id: imageId,
            },
        });
    });
}
exports.deleteImage = deleteImage;
