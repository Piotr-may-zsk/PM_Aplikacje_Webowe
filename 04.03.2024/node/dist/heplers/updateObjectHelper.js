"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObject = void 0;
function updateObject(object, data) {
    Object.entries(data).forEach(([key, value]) => {
        //@ts-ignore
        if (object[key] !== undefined) {
            //@ts-ignore
            object[key] = value;
        }
    });
    return object;
}
exports.updateObject = updateObject;
