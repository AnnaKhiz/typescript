"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFilter = void 0;
class TaskFilter {
    type;
    priority;
    status;
    term;
    employee;
    constructor(type, priority, status, term, employee) {
        this.type = type;
        this.priority = priority;
        this.status = status;
        this.term = term;
        this.employee = employee;
    }
}
exports.TaskFilter = TaskFilter;
