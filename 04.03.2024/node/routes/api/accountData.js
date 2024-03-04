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
exports.patchAccountData = exports.deleteAccountData = exports.createAccountData = exports.getAllAccountData = exports.getAccountData = void 0;
var data_1 = require("../../data");
var AccountData_1 = require("../../entity/AccountData");
var express_1 = require("express");
var updateObjectHelper_1 = require("../../heplers/updateObjectHelper");
var router = express_1.default.Router();
function getAllAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_1.AppDataSource.manager.find(AccountData_1.AccountData)];
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
exports.getAllAccountData = getAllAccountData;
function createAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var body;
        var _this = this;
        return __generator(this, function (_a) {
            body = req.body;
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var accountData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountData = new AccountData_1.AccountData();
                            accountData.createdAt = new Date();
                            accountData.bio = body.bio;
                            accountData.address = body.address;
                            return [4 /*yield*/, data_1.AppDataSource.manager.save(accountData)];
                        case 1:
                            _a.sent();
                            res.json({ "succes": "yes" });
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
exports.createAccountData = createAccountData;
function getAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var acccountID;
        var _this = this;
        return __generator(this, function (_a) {
            acccountID = parseInt(req.params.id);
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var accountRepository, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountRepository = data_1.AppDataSource.getRepository(AccountData_1.AccountData);
                            return [4 /*yield*/, accountRepository.findOneBy({ id: acccountID })];
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
exports.getAccountData = getAccountData;
function patchAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var acccountID, body;
        var _this = this;
        return __generator(this, function (_a) {
            acccountID = parseInt(req.params.id);
            body = req.body;
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var accountRepository, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountRepository = data_1.AppDataSource.getRepository(AccountData_1.AccountData);
                            return [4 /*yield*/, accountRepository.findOneBy({ id: acccountID })];
                        case 1:
                            result = _a.sent();
                            if (!(result !== null)) return [3 /*break*/, 3];
                            result = (0, updateObjectHelper_1.updateObject)(result, body);
                            //@ts-ignore
                            return [4 /*yield*/, accountRepository.save(result)];
                        case 2:
                            //@ts-ignore
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
exports.patchAccountData = patchAccountData;
function deleteAccountData(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var acccountID;
        var _this = this;
        return __generator(this, function (_a) {
            acccountID = parseInt(req.params.id);
            data_1.AppDataSource.initialize()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var accountRepository, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountRepository = data_1.AppDataSource.getRepository(AccountData_1.AccountData);
                            return [4 /*yield*/, accountRepository.findOneBy({ id: acccountID })];
                        case 1:
                            result = _a.sent();
                            if (!(result !== null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, accountRepository.remove(result)];
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
exports.deleteAccountData = deleteAccountData;
