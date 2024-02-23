import { Employee } from "./Employee";
import { Task } from "./Task";
import { TaskList } from "./TaskList";
import { EmployeeList } from "./EmployeeList";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";
import { Facade, Observer } from "./patterns/index";
import { TaskManager } from "./TaskManager";
import { isNumber, isArray, isNumberArray } from "../checkTypeFunctions/index";
import { Logger } from "./Logger";


export class EmployeeManager implements Observer {
	private _tasks: TaskManager | null = null;
	private _employees: EmployeeList | null = null;
	private logger: Logger = Logger.getInstance();
	private facade: Facade


	constructor() {
		this._employees = new EmployeeList()
		this.facade = new Facade()
	}

	//получение списка сотрудников
	public get employeeList() {
		return this._employees.employeeList;
	}

	update(message: string): void {
		this.logger.log(`[Observer]: ${message}`);
	}

	//получение списка сотрудников, которым назначены задачи
	public get employeeWithTasks() {
		return this._employees.employeeList.map(elem => elem.tasks !== undefined ? elem : console.log('No employees with tasks'))
	}

	//добавление сотрудника в список сотрудников
	public addEmployeeToList(employee: Employee): void {
		this.logger.log(`Add employee with id: [${employee.id}] to tasks list`);
		this._employees.employeeList = employee
	}

	//удаление сотрудника из списка сотрудников с проверкой назначенных ему заданий
	public deleteEmployee(id: number): Employee[] {

		let index = this._employees.employeeList.findIndex(elem => elem.id === id);

		console.log(`index `, index)
		if (index === -1) {
			this.logger.log('Got error: No employees found in deleteEmployee method');
			throw new Error('No employees found');
		}

		let person = this._employees.employeeList[index].tasks;

		if (person.length !== 0) {
			person.map(el => {
				if (el.status !== TaskStatusesEnum.FINISHED || !this.facade.findAndProcessEmployees(id)) {
					this.logger.log('Got error: You can not delete employee with active tasks');
					throw new Error('You can not delete employee with active tasks')
				}
			})
		}
		this.logger.log('Employee succeccfully deleted from employee list');
		return this._employees.employeeList.splice(index, 1)
	}

	//назначение задачи сотруднику - у каждого сотрудника могут быть свои задачи
	setTaskToEmployee(employeeId: number, task: Task): Employee[] {
		this._employees.employeeList.forEach(el => {
			if (el.id === employeeId) {
				el.assignTask(task)
			}
		});
		this.logger.log(`Current task [${task.id} - ${task.name}] was assigned to employee with id: [${employeeId}]`);
		return this._employees.employeeList
	}

	//изменение должности сотрудника
	editPosition(idEmployee: number, position: string, newEmployeeId?: number | number[]): void {
		const employee = this.employeeList.find(person => person.id === idEmployee);
		employee.position = position;

		const employeeUnfinishedTasks = employee.tasks.filter(task => task.status !== TaskStatusesEnum.FINISHED);

		if (employeeUnfinishedTasks.length === 0) {
			return
		} else {
			if (newEmployeeId === undefined) {
				this.logger.log('Employee has unfinished tasks. Add new user id for re-assign the tasks and try to edit position again');
				throw new Error('Employee has unfinished tasks. Add new user id for re-assign the tasks and try to edit position again');
			} else {
				this.resetTask(employeeUnfinishedTasks, newEmployeeId);
				this.logger.log(`Unfinished tasks were assigned to user(s) - ${newEmployeeId}`);
			}
		}
	}

	//переназначение задачи другому пользователю
	resetTask(task: Task[], newId?: number | number[]): void {

		if (isNumber(newId)) {
			const foundEmployee = this._employees.employeeList.find(employee => employee.id === newId);
			task.find(el => el.setEmployee = foundEmployee);
		} else if (isNumberArray(newId) && newId.length === task.length) {
			const foundEmployee = this._employees.employeeList.filter(employee => newId.includes(employee.id));
			task.map((task, index) => task.setEmployee = foundEmployee[index]);
		}
	}
}

const empManager = new EmployeeManager()

empManager.addEmployeeToList(new Employee('Anna', 'Khizhniak', 'engineer'))
// empManager.addEmployeeToList(new Employee('Mira', 'Ivanova', 'engineer'))
empManager.setTaskToEmployee(23, new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week'))

// console.log(empManager.employeeWithTasks)
empManager.editPosition(23, 'new position', 1)
// empManager.deleteEmployee(23)

console.log(empManager.employeeList)



