"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeList = void 0;
class EmployeeList {
    _employeeList = [];
    //просмотр списка сотрудников
    get employeeList() {
        return this._employeeList;
    }
    //добавление сотрудника
    set employeeList(employee) {
        this._employeeList.push(employee);
    }
}
exports.EmployeeList = EmployeeList;
