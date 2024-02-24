import { Task } from "../modules/Task";
import { TaskList } from "../modules/TaskList";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";

describe('TaskList', () => {
	let taskList: TaskList = new TaskList();
	let task: Task = new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week');

	it('should be an instance of TaskList', () => {
		expect(taskList).toBeInstanceOf(TaskList);
	})

	it('should get an array of tasks', () => {
		expect(taskList.taskList).toBeInstanceOf(Array<typeof task>);
	})

});