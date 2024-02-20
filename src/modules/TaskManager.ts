import { Task } from "./Task";
import { Employee } from "./Employee";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";

class TaskManager {
	private _taskList: Task[] = [];
	private _employeeList: Employee[] = [];

	constructor(
		private readonly task: Task,
		private readonly employee: Employee
	) {

	}

	//создать новую таску
	createNewTask(task: Task): void {
		this._taskList.push(task)
	}

	addToEmployeeList(employee: Employee): void {
		this._employeeList.push(employee)
	}

	get taskList(): Task[] {
		return this._taskList
	}

	get employeeList(): Employee[] {
		return this._employeeList
	}

	//назначаем сотрудника задаче
	setEmployee(taskId: number, employee: Employee): void {
		this._taskList.map(el => el.id === taskId ? el.setEmployee = employee : undefined);

	}

	//назначение задачи сотруднику - у каждого сотрудника может быть свои задачи
	setTaskToEmployee(employeeId: number, task: Task): void {
		console.log(this.employeeList)
		this._employeeList.forEach(el => {
			if (el.id === employeeId) {

				task.setEmployee = el

				el.tasks = task;
				console.log(task.id)
				console.log(el)

			}
		});

	}



}

const manager = new TaskManager(
	new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.NEW, 'week'),
	new Employee('John', 'Doe', 'engineer')
)

manager.createNewTask(new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.NEW, 'week'))
// console.log(manager.setEmployee(1, new Employee('John', 'Doe', 'engineer')))
// console.log(manager.taskList)

const person = new Employee('Anna', 'Khizhniak', 'dev');
console.log(person.tasks)

console.log(manager.addToEmployeeList(person))
console.log(manager.setTaskToEmployee(23, new Task('Task 2', 'This is task number two', TaskTypesEnum.BUG, TaskPrioritiesEnum.LOW, TaskStatusesEnum.NEW, '2 weeks')))
console.log(manager.employeeList)
console.log(person.tasks)

