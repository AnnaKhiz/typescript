"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSort = void 0;
class TaskSort {
    date_created;
    term;
    priority;
    constructor(date_created, term, priority) {
        this.date_created = date_created;
        this.term = term;
        this.priority = priority;
    }
}
exports.TaskSort = TaskSort;
