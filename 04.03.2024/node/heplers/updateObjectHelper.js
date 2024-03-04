"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObject = void 0;
function updateObject(object, data) {
    Object.entries(data).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        //@ts-ignore
        if (object[key] !== undefined) {
            //@ts-ignore
            object[key] = value;
        }
    });
    return object;
}
exports.updateObject = updateObject;
