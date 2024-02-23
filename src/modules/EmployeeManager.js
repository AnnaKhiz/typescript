"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
const Employee_1 = require("./Employee");
const Task_1 = require("./Task");
const EmployeeList_1 = require("./EmployeeList");
const enum_1 = require("../enums/enum");
const index_1 = require("./patterns/index");
const index_2 = require("../checkTypeFunctions/index");
const Logger_1 = require("./Logger");
class EmployeeManager {
    _tasks = null;
    _employees = null;
    logger = Logger_1.Logger.getInstance();
    facade;
    constructor() {
        this._employees = new EmployeeList_1.EmployeeList();
        this.facade = new index_1.Facade();
    }
    //получение списка сотрудников
    get employeeList() {
        return this._employees.employeeList;
    }
    update(message) {
        this.logger.log(`[Observer]: ${message}`);
    }
    //получение списка сотрудников, которым назначены задачи
    get employeeWithTasks() {
        return this._employees.employeeList.map(elem => elem.tasks !== undefined ? elem : console.log('No employees with tasks'));
    }
    //добавление сотрудника в список сотрудников
    addEmployeeToList(employee) {
        this.logger.log(`Add employee with id: [${employee.id}] to tasks list`);
        this._employees.employeeList = employee;
    }
    //удаление сотрудника из списка сотрудников с проверкой назначенных ему заданий
    deleteEmployee(id) {
        let index = this._employees.employeeList.findIndex(elem => elem.id === id);
        console.log(`index `, index);
        if (index === -1) {
            this.logger.log('Got error: No employees found in deleteEmployee method');
            throw new Error('No employees found');
        }
        let person = this._employees.employeeList[index].tasks;
        if (person.length !== 0) {
            person.map(el => {
                if (el.status !== enum_1.TaskStatusesEnum.FINISHED || !this.facade.findAndProcessEmployees(id)) {
                    this.logger.log('Got error: You can not delete employee with active tasks');
                    throw new Error('You can not delete employee with active tasks');
                }
            });
        }
        this.logger.log('Employee succeccfully deleted from employee list');
        return this._employees.employeeList.splice(index, 1);
    }
    //назначение задачи сотруднику - у каждого сотрудника могут быть свои задачи
    setTaskToEmployee(employeeId, task) {
        this._employees.employeeList.forEach(el => {
            if (el.id === employeeId) {
                el.assignTask(task);
            }
        });
        this.logger.log(`Current task [${task.id} - ${task.name}] was assigned to employee with id: [${employeeId}]`);
        return this._employees.employeeList;
    }
    //изменение должности сотрудника
    editPosition(idEmployee, position, newEmployeeId) {
        const employee = this.employeeList.find(person => person.id === idEmployee);
        employee.position = position;
        const employeeUnfinishedTasks = employee.tasks.filter(task => task.status !== enum_1.TaskStatusesEnum.FINISHED);
        if (employeeUnfinishedTasks.length === 0) {
            return;
        }
        else {
            if (newEmployeeId === undefined) {
                this.logger.log('Employee has unfinished tasks. Add new user id for re-assign the tasks and try to edit position again');
                throw new Error('Employee has unfinished tasks. Add new user id for re-assign the tasks and try to edit position again');
            }
            else {
                this.resetTask(employeeUnfinishedTasks, newEmployeeId);
                this.logger.log(`Unfinished tasks were assigned to user(s) - ${newEmployeeId}`);
            }
        }
    }
    //переназначение задачи другому пользователю
    resetTask(task, newId) {
        if ((0, index_2.isNumber)(newId)) {
            const foundEmployee = this._employees.employeeList.find(employee => employee.id === newId);
            task.find(el => el.setEmployee = foundEmployee);
        }
        else if ((0, index_2.isNumberArray)(newId) && newId.length === task.length) {
            const foundEmployee = this._employees.employeeList.filter(employee => newId.includes(employee.id));
            task.map((task, index) => task.setEmployee = foundEmployee[index]);
        }
    }
}
exports.EmployeeManager = EmployeeManager;
const empManager = new EmployeeManager();
empManager.addEmployeeToList(new Employee_1.Employee('Anna', 'Khizhniak', 'engineer'));
// empManager.addEmployeeToList(new Employee('Mira', 'Ivanova', 'engineer'))
empManager.setTaskToEmployee(23, new Task_1.Task('Task 1', 'This is task number one', enum_1.TaskTypesEnum.STORY, enum_1.TaskPrioritiesEnum.HIGH, enum_1.TaskStatusesEnum.FINISHED, 'week'));
// console.log(empManager.employeeWithTasks)
empManager.editPosition(23, 'new position', 1);
// empManager.deleteEmployee(23)
console.log(empManager.employeeList);
