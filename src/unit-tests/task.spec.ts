import { Task } from "../modules/Task";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";

const TYPE = TaskTypesEnum.STORY;
const NAME = 'Task 1';
const DESCRIPTION = 'This is task number one';
const PRIORITY = TaskPrioritiesEnum.HIGH;
const STATUS = TaskStatusesEnum.FINISHED;
const TERM = 'week';

describe('Task', () => {
	let task: Task;


	beforeEach(() => {
		task = new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week');
	})

	it('should be an instance of Task', () => {
		expect(task).toBeInstanceOf(Task);
	})

	it('should be correct value', () => {
		expect(task.name).toBe(NAME);
		expect(task.type).toBe(TYPE);
		expect(task.description).toBe(DESCRIPTION);
		expect(task.priority).toBe(PRIORITY);
		expect(task.status).toBe(STATUS);
		expect(task.term).toBe(TERM);
	})

	it('should be generated', () => {
		expect(task.id).not.toBeUndefined;
	})
});
