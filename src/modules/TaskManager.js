"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./Task");
const Employee_1 = require("./Employee");
const enum_1 = require("../enums/enum");
class TaskManager {
    task;
    employee;
    _taskList = [];
    _employeeList = [];
    constructor(task, employee) {
        this.task = task;
        this.employee = employee;
    }
    //создать новую таску
    createNewTask(task) {
        this._taskList.push(task);
    }
    addToEmployeeList(employee) {
        this._employeeList.push(employee);
    }
    get taskList() {
        return this._taskList;
    }
    get employeeList() {
        return this._employeeList;
    }
    //назначаем сотрудника задаче
    setEmployee(taskId, employee) {
        this._taskList.map(el => el.id === taskId ? el.setEmployee = employee : undefined);
    }
    //назначение задачи сотруднику
    setTaskToEmployee(employeeId, task) {
        console.log(this.employeeList);
        this._employeeList.forEach(el => {
            if (el.id === employeeId) {
                task.setEmployee = el;
                el.tasks = task;
                console.log(task.id);
                console.log(el);
            }
        });
    }
}
const manager = new TaskManager(new Task_1.Task('Task 1', 'This is task number one', enum_1.TaskTypesEnum.STORY, enum_1.TaskPrioritiesEnum.HIGH, enum_1.TaskStatusesEnum.NEW, 'week'), new Employee_1.Employee('John', 'Doe', 'engineer'));
manager.createNewTask(new Task_1.Task('Task 1', 'This is task number one', enum_1.TaskTypesEnum.STORY, enum_1.TaskPrioritiesEnum.HIGH, enum_1.TaskStatusesEnum.NEW, 'week'));
// console.log(manager.setEmployee(1, new Employee('John', 'Doe', 'engineer')))
// console.log(manager.taskList)
const person = new Employee_1.Employee('Anna', 'Khizhniak', 'dev');
console.log(person.tasks);
console.log(manager.addToEmployeeList(person));
console.log(manager.setTaskToEmployee(23, new Task_1.Task('Task 2', 'This is task number two', enum_1.TaskTypesEnum.BUG, enum_1.TaskPrioritiesEnum.LOW, enum_1.TaskStatusesEnum.NEW, '2 weeks')));
console.log(manager.employeeList);
console.log(person.tasks);
