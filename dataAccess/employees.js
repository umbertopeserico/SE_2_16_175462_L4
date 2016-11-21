var employee = require('../models/employee.js');
var employees = [];

employees.push(new employee(1, "Umberto", "Peserico", '1', '2'));

function getAllEmployees() {
    return employees;
}

function addEmployee(employee) {
    if (employees.push(employee)) {
        return true;
    } else {
        return false;
    }
}

function findEmployee(id) {
    var employee = null;
    employees.forEach(function (elem, index, array) {
        console.log(elem.id);
        if (elem.id == id) {
            employee = elem;
        }
    });
    return employee;
}

function updateEmployee(editedEmployee, id) {
    var employee = findEmployee(id);
    employee.id = editedEmployee.id;
    employee.name = editedEmployee.name;
    employee.surname = editedEmployee.id;
    employee.level = editedEmployee.level;
    employee.salary = editedEmployee.salary;
    return true;
}

function destroyEmployee(editedEmployee, id) {
    var employee = findEmployee(id);
    var index = employees.indexOf(employee);

    employees.splice(index, 1);

    return true;
}

module.exports.all = getAllEmployees
module.exports.find = findEmployee
module.exports.create = addEmployee
module.exports.update = updateEmployee
module.exports.destroy = destroyEmployee