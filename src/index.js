"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./modules/Task");
const Employee_1 = require("./modules/Employee");
const enum_1 = require("./enums/enum");
const employee = new Employee_1.Employee('John', 'Doe', 'developer');
const task = new Task_1.Task('Task 1', 'This is task number one', enum_1.TaskTypesEnum.STORY, enum_1.TaskPrioritiesEnum.HIGH, enum_1.TaskStatusesEnum.FINISHED, 'week');
// const person = new Employee('John', 'Doe', 'engineer')
// console.log(person.employeeFullName)
// console.log(person.id)
