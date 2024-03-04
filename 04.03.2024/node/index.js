"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var api_1 = require("./routes/api");
var api2_1 = require("./routes/api2");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use('/api', api_1.router);
app.use('/api2', api2_1.router);
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
