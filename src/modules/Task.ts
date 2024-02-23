import { Employee } from "./Employee";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";


interface ITask {
	type: TaskTypesEnum,
	name: string,
	description: string,
	priority: TaskPrioritiesEnum,
	status: TaskStatusesEnum,
}

export class Task implements ITask {
	private readonly _id = Date.now();
	private readonly date_created = new Date().toISOString();
	private _employee: Employee;

	constructor(
		public readonly _name: string,
		private readonly _description: string,
		private readonly _type: TaskTypesEnum,
		private _priority: TaskPrioritiesEnum,
		private _status: TaskStatusesEnum,
		public readonly term: string,
	) { }

	public get id(): number {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}

	public get description(): string {
		return this._description;
	}

	public get type(): TaskTypesEnum {
		return this._type;
	}

	public get priority(): TaskPrioritiesEnum {
		return this._priority;
	}

	public get status(): TaskStatusesEnum {
		return this._status;
	}

	public set status(status: TaskStatusesEnum) {
		this._status = status;
	}

	public get employee(): Employee {
		return this._employee;
	}

	public set setEmployee(person: Employee) {
		this._employee = person;
	}

	public assignEmployee(employee: Employee): void {
		this._employee = employee;
		employee.tasks.push(this);
	}

}





