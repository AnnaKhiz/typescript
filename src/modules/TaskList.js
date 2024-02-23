"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
class TaskList {
    _taskList = [];
    //просмотр списка задач
    get taskList() {
        return this._taskList;
    }
    //добавление задачи
    set taskList(task) {
        this._taskList.push(task);
    }
}
exports.TaskList = TaskList;
