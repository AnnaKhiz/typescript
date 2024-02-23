import { TaskPrioritiesEnum } from "../enums/enum";


export class TaskSort {
	constructor (
		public date_created? : string,
		public term? :string,
		public priority? : TaskPrioritiesEnum
	) {}
	
}