import { Task } from "./modules/Task";
import { Employee } from "./modules/Employee";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "./enums/enum";




const employee = new Employee('John', 'Doe', 'developer');
const task = new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week');


// const person = new Employee('John', 'Doe', 'engineer')
// console.log(person.employeeFullName)
// console.log(person.id)