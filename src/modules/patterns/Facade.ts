import { TaskStatusesEnum } from "../../enums/enum";
import { TaskManager } from "../TaskManager";
import { Task } from "../Task";

export class Facade {
	private tasks: Task[];
	private taskManager: TaskManager = new TaskManager('admin');

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