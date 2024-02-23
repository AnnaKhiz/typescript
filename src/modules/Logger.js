"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static instance = null;
    logs = [];
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG:]: ${message}`);
        this.logs.push(message);
    }
    get logList() {
        return this.logs;
    }
    clearLogs() {
        this.logs = [];
    }
}
exports.Logger = Logger;
