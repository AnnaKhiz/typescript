import { EmployeeList } from "../modules/EmployeeList";
import { Employee } from "../modules/Employee";


describe('EmployeeList', () => {
	let employeeList: EmployeeList = new EmployeeList();
	let employee: Employee = new Employee('John', 'Doe', 'engineer');

	it('should be an instance of EmployeeList', () => {
		expect(employeeList).toBeInstanceOf(EmployeeList);
	})

	it('should get an array of employee', () => {
		expect(employeeList.employeeList).toBeInstanceOf(Array<typeof employee>);
	})

});