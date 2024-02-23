import { Employee } from "./Employee";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum"

export class TaskFilter {
	constructor(
		public type?: TaskTypesEnum,
		public priority?: TaskPrioritiesEnum,
		public status?: TaskStatusesEnum,
		public term?: string,
		public employee?: Employee
	) { }
}