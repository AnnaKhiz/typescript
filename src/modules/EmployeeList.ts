import { Employee } from "./Employee";

export class EmployeeList {
	private _employeeList: Employee[] = [];

	public get employeeList(): Employee[] {
		return this._employeeList;
	}

	public set employeeList(employee: Employee) {
		this._employeeList.push(employee);
	}

}