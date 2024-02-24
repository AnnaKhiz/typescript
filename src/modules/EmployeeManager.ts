import { Employee } from "./Employee";
import { Task } from "./Task";
import { EmployeeList } from "./EmployeeList";
import { TaskStatusesEnum } from "../enums/enum";
import { Facade, Observer, Logger } from "./patterns/index";
import { isNumber, isNumberArray } from "../checkTypeFunctions/index";


export class EmployeeManager implements Observer {
	private _employees: EmployeeList | null = null;
	private logger: Logger = Logger.getInstance();
	private facade: Facade;

	constructor() {
		this._employees = new EmployeeList();
		this.facade = new Facade();
	}

	public get employeeList() {
		return this._employees.employeeList;
	}

	public update(message: string): void {
		this.logger.log(`[Observer]: ${message}`);
	}

	public get employeeWithTasks(): Employee[] | unknown {
		return this._employees.employeeList.map(elem => elem.tasks !== undefined ? elem : console.log('No employees with tasks'));
	}

	public addEmployeeToList(employee: Employee): void {
		this.logger.log(`Add employee with id: [${employee.id}] to employee list`);
		this._employees.employeeList = employee;
	}

	public editEmployeeData(id: number, employee: Employee): EmployeeList | Employee {
		let index = this._employees.employeeList.findIndex(elem => elem.id === id);

		if (index === -1) {
			this.logger.log('Got error: No employees found in deleteEmployee method');
			throw new Error('No employees found');
		}

		let person = this._employees.employeeList[index];
		let employeeTasks = person.tasks;

		if (person) {
			Object.keys(employee).forEach(key => key !== 'id' ? person[key] = person[key] : person[key]);
		}

		if (employeeTasks) {
			employeeTasks.forEach(task => person.tasks = task);
		}

		this.logger.log(`The employee with id: [${id}] was edited successfully`);

		return this._employees;
	}

	public deleteEmployee(id: number): Employee[] {
		let index = this._employees.employeeList.findIndex(elem => elem.id === id);

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

	public setTaskToEmployee(employeeId: number, task: Task): Employee[] {
		this._employees.employeeList.forEach(el => {
			if (el.id === employeeId) {
				el.assignTask(task)
			}
		});
		this.logger.log(`Current task [${task.id} - ${task.name}] was assigned to employee with id: [${employeeId}]`);
		return this._employees.employeeList
	}

	public editPosition(idEmployee: number, position: string, newEmployeeId?: number | number[]): void {
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

	private resetTask(task: Task[], newId?: number | number[]): void {

		if (isNumber(newId)) {
			const foundEmployee = this._employees.employeeList.find(employee => employee.id === newId);
			task.find(el => el.setEmployee = foundEmployee);
		} else if (isNumberArray(newId) && newId.length === task.length) {
			const foundEmployee = this._employees.employeeList.filter(employee => newId.includes(employee.id));
			task.map((task, index) => task.setEmployee = foundEmployee[index]);
		}
	}
}

