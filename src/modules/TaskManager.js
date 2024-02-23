"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manager = exports.TaskManager = void 0;
const Task_1 = require("./Task");
const Employee_1 = require("./Employee");
const enum_1 = require("../enums/enum");
const TaskList_1 = require("./TaskList");
const EmployeeList_1 = require("./EmployeeList");
const Logger_1 = require("./Logger");
class TaskManager {
    _role;
    _tasks = null;
    _employees = null;
    logger = Logger_1.Logger.getInstance();
    // private facade: Facade;
    constructor(_role) {
        this._role = _role;
        this._tasks = new TaskList_1.TaskList();
        this._employees = new EmployeeList_1.EmployeeList();
    }
    update(message) {
        this.logger.log(`[Observer]: ${message}`);
    }
    get taskList() {
        return this._tasks.taskList;
    }
    get taskWithEmployee() {
        return this._tasks.taskList.map(elem => elem.employee !== undefined ? elem : console.log('No tasks with employees'));
    }
    get role() {
        return this._role;
    }
    set role(role) {
        this._role = role;
    }
    createNewTask(task) {
        this.logger.log(`New task with id: [${task.id}] created`);
        this._tasks.taskList = task;
    }
    setEmployeeToTask(taskId, employee) {
        if (!this.canManageTasks()) {
            this.logger.log(`Got error: Your permission level is not enough for managing tasks`);
            throw new Error('Your permission level is not enough for managing tasks');
        }
        else {
            this._tasks.taskList.map(el => el.id === taskId ? el.assignEmployee(employee) : undefined);
            this.logger.log(`Employee [${employee.id}] was set to current task [${taskId}]`);
        }
    }
    editTask(id, task) {
        if (!this.canManageTasks()) {
            this.logger.log('Got error: Your permission level is not enough for editing tasks');
            throw new Error('Your permission level is not enough for editing tasks');
        }
        let index = this._tasks.taskList.findIndex(elem => elem.id === id);
        if (index === -1) {
            return;
        }
        let element = this._tasks.taskList[index];
        let employee = element.employee;
        if (element) {
            Object.keys(task).forEach(key => key !== 'id' ? element[key] = task[key] : element[key]);
        }
        if (employee) {
            element.setEmployee = employee;
        }
        this.logger.log(`The task with id: [${id}] was edited successfully`);
        return this._tasks;
    }
    deleteTask(id) {
        if (!this.canManageTasks()) {
            this.logger.log('Got error: Your permission level is not enough for deliting tasks');
            throw new Error('Your permission level is not enough for deliting tasks');
        }
        else {
            let index = this._tasks.taskList.findIndex(elem => elem.id === id);
            if (index === -1) {
                return;
            }
            else {
                this._tasks.taskList.splice(index, 1);
                this.logger.log(`The task with id: [${id}] was deleted successfully`);
            }
        }
        return this._tasks;
    }
    renewTaskStatus(id, status) {
        if (!this.canManageTasks()) {
            this.logger.log('Got error: Your permission level is not enough for renewiting tasks');
            throw new Error('Your permission level is not enough for renewiting tasks');
        }
        else {
            let element = this._tasks.taskList.find(elem => elem.id === id);
            if (element === undefined || element.employee === undefined) {
                this.logger.log('Got error: You can not change task status if it doesnt have employee');
                throw new Error('You can not change task status if it doesnt have employee');
            }
            element.status = status;
            this._tasks.taskList.find(elem => elem.id === id ? elem = element : false);
            this.logger.log(`The status of task id: [${id}] was changed successfully`);
        }
        return this._tasks;
    }
    filterTasks(filter) {
        return this._tasks.taskList.filter(task => {
            return ((!filter.type || task.type === filter.type) &&
                (!filter.priority || task.priority === filter.priority) &&
                (!filter.status || task.status === filter.status) &&
                (!filter.term || task.term === filter.term) &&
                (!filter.employee || task.employee === filter.employee));
        });
    }
    sortTasks(field) {
        let length = this._tasks.taskList.length;
        let task = this._tasks.taskList;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (task[j][field] > task[j + 1][field]) {
                    let temp = task[j];
                    task[j] = task[j + 1];
                    task[j + 1] = temp;
                }
            }
        }
        return this._tasks.taskList;
    }
    canManageTasks() {
        return this.role === 'admin';
    }
}
exports.TaskManager = TaskManager;
// const emp = new EmployeeManager()
// const mediator = new Mediator()
// mediator.setMediator(emp)
exports.manager = new TaskManager('admin');
//new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.NEW, 'week'),
// new Employee('John', 'Doe', 'engineer')
// manager.createNewTask(new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week'))
// manager.createNewTask(new Task('Task 2', 'This is task number two', TaskTypesEnum.BUG, TaskPrioritiesEnum.LOW, TaskStatusesEnum.FINISHED, 'day'))
exports.manager.createNewTask(new Task_1.Task('Task 3', 'This is task number three', enum_1.TaskTypesEnum.TASK, enum_1.TaskPrioritiesEnum.MEDIUM, enum_1.TaskStatusesEnum.FINISHED, 'month'));
exports.manager.setEmployeeToTask(1, new Employee_1.Employee('John', 'Doe', 'engineer'));
exports.manager.editTask(1, new Task_1.Task('Task 285', 'This is task number dfgdfgdfg', enum_1.TaskTypesEnum.STORY, enum_1.TaskPrioritiesEnum.LOW, enum_1.TaskStatusesEnum.NEW, 'day'));
console.log(exports.manager.taskList);
// console.log(manager)
// console.log(manager.taskWithEmployee)
// const person = new Employee('Anna', 'Khizhniak', 'dev');
// console.log(person.tasks)
// manager.addToEmployeeList(person)
// console.log(manager.setTaskToEmployee(23, new Task('Task 2', 'This is task number two', TaskTypesEnum.BUG, TaskPrioritiesEnum.LOW, TaskStatusesEnum.NEW, '2 weeks')))
// console.log(manager.employeeList)
// console.log(person.tasks)
// manager.editTask(1, new Task('Task edited', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.NEW, 'week'))
// manager.deleteTask(1)
// console.log(manager.taskList)
exports.manager.renewTaskStatus(1, enum_1.TaskStatusesEnum.FINISHED);
console.log(exports.manager.taskList);
// const filter = new TaskFilter();
// filter.status = TaskStatusesEnum.NEW;
// filter.type = TaskTypesEnum.TASK;
// manager.filterTasks(filter)
// manager.sortTasks('term')
