import { Task } from "./Task";

export class TaskList {
	private _taskList: Task[] = [];

	public get taskList(): Task[] {
		return this._taskList;
	}

	public set taskList(task: Task) {
		this._taskList.push(task);
	}

}

