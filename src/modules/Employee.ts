import { Task } from "./Task";

interface IEmployee {
	first_name: string,
	last_name: string,
	position: string,
	tasks: Task[]
}

export class Employee implements IEmployee {
	// private readonly _id = Date.now();
	private readonly _id = 23;
	private _tasks: Task[] = [];

	constructor(
		public readonly _first_name: string,
		public readonly _last_name: string,
		private _position: string,
	) {}

	public get id(): number {
		return this._id;
	}

	public get first_name(): string {
		return this._first_name;
	}

	public get last_name(): string {
		return this._last_name;
	}

	public get position(): string {
		return this._position;
	}

	public get tasks(): Task[] {
		return this._tasks;
	}

	private set tasks(task: Task) {
		this.tasks.push(task);
	}

	public set position(position: string) {
		this._position = position;
	}

	public assignTask(task: Task): void {
		this._tasks.push(task);
		task.setEmployee = this;
	}
}





