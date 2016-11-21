var employee = require('../models/employee.js');
var employees = [];

employees.push(new employee(1,"Umberto", "Peserico", '1', '2'));

function getAllEmployees() {
    return employees;
}

function addEmployee(employee) {
    if(employees.push(employee)) {
        return true;
    } else {
        return false;
    }
}

module.exports.getAllEmployees = getAllEmployees;