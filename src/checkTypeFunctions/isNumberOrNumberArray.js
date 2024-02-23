"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberOrNumberArray = void 0;
function isNumberOrNumberArray(value) {
    if (typeof value === 'number') {
        return true;
    }
    else if (Array.isArray(value)) {
        return value.every(item => typeof item === 'number');
    }
    return false;
}
exports.isNumberOrNumberArray = isNumberOrNumberArray;
