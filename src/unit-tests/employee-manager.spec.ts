import { Employee } from "../modules/Employee";
import { EmployeeManager } from "../modules/EmployeeManager";
import { Task } from "../modules/Task";
import { TaskTypesEnum, TaskPrioritiesEnum, TaskStatusesEnum } from "../enums/enum";

describe('TaskManager', () => {
	let employeeManager: EmployeeManager = new EmployeeManager();
	let task: Task;
	let employee: Employee;

	beforeEach(() => {
		employee = new Employee('John', 'Doe', 'dev');
		task = new Task('Task 1', 'This is task number one', TaskTypesEnum.STORY, TaskPrioritiesEnum.HIGH, TaskStatusesEnum.DELAYED, 'week');
	})

	it('should be an instance of EmployeeManager', () => {
		expect(employeeManager).toBeInstanceOf(EmployeeManager);
	})

	it('should return an array of Employee', () => {
		expect(employeeManager.employeeList).toBeInstanceOf(Array<typeof employee>);
		expect(employeeManager.setTaskToEmployee(employee.id, task)).toBeInstanceOf(Array<typeof employee>);
		expect(employeeManager.employeeWithTasks).toBeInstanceOf(Array<typeof employee>);
	})

	it('should show an Error when manager delete employee, but no one found in EmployeeList', () => {
		expect(() => employeeManager.deleteEmployee(12)).toThrow('No employees found');
	})

	it('should show an Error when manager edit employee position, but he has unfinished tasks', () => {
		employee.assignTask(task);
		employeeManager.addEmployeeToList(employee);
		expect(() => employeeManager.editPosition(employee.id, 'engineer')).toThrow('Employee has unfinished tasks. Add new user id for re-assign the tasks and try to edit position again');
	})

});