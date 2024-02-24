import { SortAlgorythm, SortType, EmployeeRole } from "./types/types";
import { TaskStatusesEnum } from "./enums/enum";
import { Task } from "./modules/Task";
import { Employee } from "./modules/Employee";
import { TaskList } from "./modules/TaskList";
import { TaskManager } from "./modules/TaskManager";
import { EmployeeManager } from "./modules/EmployeeManager";
import { TaskFilter } from "./modules/TaskFilter";


class TaskManagementSystem {
	private _taskManager: TaskManager = new TaskManager('admin');
	private _employeeManager: EmployeeManager = new EmployeeManager();

	public get taskManager(): TaskManager {
		return this._taskManager;
	}

	public get tasks(): Task[] {
		return this._taskManager.taskList;
	}

	public get employees(): Employee[] {
		return this._employeeManager.employeeList;
	}

	public get tasksWithAssignedEmployees(): Task[] | unknown {
		return this._taskManager.taskWithEmployee;
	}

	public get employeesWithAssignedTasks(): Employee[] | unknown {
		return this._employeeManager.employeeWithTasks;
	}

	public addTask(task: Task): void {
		this._taskManager.createNewTask(task);
	}

	public addEmployee(employee: Employee): void {
		this._employeeManager.addEmployeeToList(employee);
	}

	public editTask(id: number, task: Task): void {
		this._taskManager.editTask(id, task);
	}

	public editEmployee(id: number, employee: Employee): void {
		this._employeeManager.editEmployeeData(id, employee);
	}

	public editTaskManagerRole(role: EmployeeRole): void {
		this._taskManager.role = role;
	}

	public deleteTask(id: number): TaskList {
		return this._taskManager.deleteTask(id);
	}

	public deleteEmployee(id: number): Employee[] {
		return this._employeeManager.deleteEmployee(id);
	}

	public sortTasks(algorythm: SortAlgorythm, field: SortType): void {
		algorythm === 'bubble' ? this._taskManager.bubbleSortTasks(field) : this._taskManager.choiceSortTasks(field);
	}

	public filterTasks(filter: TaskFilter): void {
		this._taskManager.filterTasks(filter);
	}

	public renewTaskStatus(id: number, status: TaskStatusesEnum): void {
		this._taskManager.renewTaskStatus(id, status);
	}

	public assignTaskToEmployee(id: number, task: Task): void {
		this._employeeManager.setTaskToEmployee(id, task);
	}

	public assignEmployeeToTask(id: number, employee: Employee): void {
		this._taskManager.setEmployeeToTask(id, employee);
	}

	public editEmployeePosition(idEmployee: number, position: string, newEmployeeId?: number | number[]): void {
		newEmployeeId !== undefined
			? this._employeeManager.editPosition(idEmployee, position, newEmployeeId)
			: this._employeeManager.editPosition(idEmployee, position)
	}
}

const manageSystem = new TaskManagementSystem();