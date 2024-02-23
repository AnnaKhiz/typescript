"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = void 0;
const enum_1 = require("../../enums/enum");
const TaskManager_1 = require("../TaskManager");
class Facade {
    tasks;
    taskManager = TaskManager_1.manager;
    constructor() {
        this.tasks = this.taskManager.taskList;
    }
    findAndProcessEmployees(idEmployee) {
        const tasksFound = this.tasks.filter(element => {
            if (element.employee !== undefined) {
                return element.employee.id === idEmployee && element.status !== enum_1.TaskStatusesEnum.FINISHED;
            }
        });
        return tasksFound.length === 0;
    }
}
exports.Facade = Facade;
