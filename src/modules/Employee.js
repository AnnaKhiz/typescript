"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    _first_name;
    _last_name;
    _position;
    // private readonly _id = Date.now();
    _id = 23;
    _tasks = [];
    constructor(_first_name, _last_name, _position) {
        this._first_name = _first_name;
        this._last_name = _last_name;
        this._position = _position;
    }
    get id() {
        return this._id;
    }
    get first_name() {
        return this._first_name;
    }
    get last_name() {
        return this._last_name;
    }
    get position() {
        return this._position;
    }
    get tasks() {
        return this._tasks;
    }
    set tasks(task) {
        this.tasks.push(task);
    }
    set position(position) {
        this._position = position;
    }
    assignTask(task) {
        this._tasks.push(task);
        task.setEmployee = this;
    }
}
exports.Employee = Employee;
