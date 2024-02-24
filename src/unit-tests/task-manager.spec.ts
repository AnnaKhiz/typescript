import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";
import { Employee } from "../modules/Employee";
import { Task } from "../modules/Task";
import { TaskFilter } from "../modules/TaskFilter";
import { TaskManager } from "../modules/TaskManager";

const ROLE = 'admin';

describe('TaskManager', () => {
	let taskManager: TaskManager;
	let task: Task;
	let employee: Employee = new Employee('John', 'Doe', 'dev');
	let filter: TaskFilter;

	beforeEach(() => {
		task = new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week');
		taskManager = new TaskManager('admin');
	})

	it('should be an instance of TaskManager', () => {
		expect(taskManager).toBeInstanceOf(TaskManager);
	})

	it('should return an array of Task', () => {
		expect(taskManager.taskList).toBeInstanceOf(Array<typeof task>);
	})

	it('should return manager role', () => {
		expect(taskManager.role).toBe(ROLE);
	})

	it('should show an Error if manager is not admin and try to manage tasks', () => {
		taskManager = new TaskManager('employee');
		task = new Task('Task 2', 'This is task number two', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.FINISHED, 'week')
		expect(() => taskManager.setEmployeeToTask(task.id, employee)).toThrow('Your permission level is not enough for managing tasks');
		expect(() => taskManager.editTask(task.id, task)).toThrow('Your permission level is not enough for editing tasks');
		expect(() => taskManager.deleteTask(task.id)).toThrow('Your permission level is not enough for deliting tasks');
		expect(() => taskManager.renewTaskStatus(task.id, TaskStatusesEnum.DELAYED)).toThrow('Your permission level is not enough for renewiting tasks');
	})

	it('should return, filtered by condition, an array of Task', () => {
		filter = new TaskFilter()
		filter.status = TaskStatusesEnum.FINISHED;
		filter.type = TaskTypesEnum.STORY;
		expect(taskManager.filterTasks(filter)).toBeInstanceOf(Array<typeof task>);
	})

	it('should return, sorted by field, an array of Task', () => {
		expect(taskManager.bubbleSortTasks('priority')).toBeInstanceOf(Array<typeof task>);
	})

});