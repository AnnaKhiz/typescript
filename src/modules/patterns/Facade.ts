import { TaskStatusesEnum } from "../../enums/enum";
import { TaskManager } from "../TaskManager";
import { Task } from "../Task";
import { manager } from "../TaskManager";


export class Facade {
	private tasks: Task[];
	private taskManager: TaskManager = manager;

	constructor() {
		this.tasks = this.taskManager.taskList;
	}

	findAndProcessEmployees(idEmployee: number): boolean {
		const tasksFound = this.tasks.filter(element => {
			if (element.employee !== undefined) {
				return element.employee.id === idEmployee && element.status !== TaskStatusesEnum.FINISHED;
			}
		})
		return tasksFound.length === 0;
	}
}