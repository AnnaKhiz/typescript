"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberArray = void 0;
function isNumberArray(value) {
    if (Array.isArray(value)) {
        return value.every(item => typeof item === 'number');
    }
}
exports.isNumberArray = isNumberArray;
