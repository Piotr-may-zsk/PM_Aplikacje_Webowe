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
exports.createEvent = exports.patchEvent = exports.deleteEvent = exports.getAllEvents = exports.getEvent = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
function getAllEvents(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield prisma.event.findMany();
        res.json(events);
    });
}
exports.getAllEvents = getAllEvents;
function createEvent(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const newEvent = yield prisma.event.create({
            data: {
                date: body.date,
                name: body.name,
                location: body.location
            },
        });
        res.json({ "succes": "yes" });
    });
}
exports.createEvent = createEvent;
function getEvent(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventId = parseInt(req.params.id);
        const event = yield prisma.event.findFirst({
            where: {
                id: eventId
            }
        });
        if (event === null) {
            res.status(404);
            res.send('not found');
        }
        else {
            res.json(event);
        }
    });
}
exports.getEvent = getEvent;
function patchEvent(req, res, next) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const eventId = parseInt(req.params.id);
        const body = req.body;
        const notUpdated = yield prisma.event.findFirst({
            where: {
                id: eventId
            }
        });
        if (notUpdated !== null) {
            const updateAccount = yield prisma.event.update({
                where: {
                    id: eventId,
                },
                data: {
                    date: (_a = body.date) !== null && _a !== void 0 ? _a : notUpdated.date,
                    name: (_b = body.name) !== null && _b !== void 0 ? _b : notUpdated.name,
                    location: (_c = body.location) !== null && _c !== void 0 ? _c : notUpdated.location
                },
            });
        }
    });
}
exports.patchEvent = patchEvent;
function deleteEvent(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventId = parseInt(req.params.id);
        const deleteEvent = yield prisma.event.delete({
            where: {
                id: eventId,
            },
        });
    });
}
exports.deleteEvent = deleteEvent;
