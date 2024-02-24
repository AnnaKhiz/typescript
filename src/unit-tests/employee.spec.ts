import { Employee } from "../modules/Employee";

describe('Employee', () => {
	let employee: Employee;

	const FIRST_NAME = 'John';
	const LAST_NAME = 'Doe';
	const POSITION = 'engineer';

	beforeEach(() => {
		employee = new Employee('John', 'Doe', 'engineer');
	})

	it('should be an instance of Employee', () => {
		expect(employee).toBeInstanceOf(Employee);
	})

	it('should be correct value', () => {
		expect(employee.first_name).toBe(FIRST_NAME);
		expect(employee.last_name).toBe(LAST_NAME);
		expect(employee.position).toBe(POSITION);
	})

	it('should be generated', () => {
		expect(employee.id).not.toBeUndefined;
	})

	it('should be an array', () => {
		expect(employee.tasks).toHaveLength;
	})
});
