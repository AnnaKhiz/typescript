"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    _name;
    _description;
    _type;
    _priority;
    _status;
    term;
    // private readonly _id = Date.now();
    _id = 1;
    date_created = new Date().toISOString();
    employee;
    constructor(_name, _description, _type, _priority, _status, term) {
        this._name = _name;
        this._description = _description;
        this._type = _type;
        this._priority = _priority;
        this._status = _status;
        this.term = term;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get type() {
        return this._type;
    }
    get priority() {
        return this._priority;
    }
    get status() {
        return this._status;
    }
    //назначить исполнителя задаче
    set setEmployee(person) {
        this.employee = person;
    }
}
exports.Task = Task;
