var employee = require('../models/employee.js');
var employees = [];

employees.push(new employee(1, "Umberto", "Peserico", '1', '2'));

function getAllEmployees() {
    return employees;
}

function addEmployee(employee) {
    if (validateEmployee(employee)) {
        employees.push(employee);
        return true;
    } else {
        return false;
    }
}

function findEmployee(id) {
    var employee = null;
    employees.forEach(function (elem, index, array) {
        if (elem.id == id) {
            employee = elem;
        }
    });
    return employee;
}

function updateEmployee(editedEmployee, id) {
    if (validateEmployee(editedEmployee)) {
        var employee = findEmployee(id);
        employee.id = editedEmployee.id;
        employee.name = editedEmployee.name;
        employee.surname = editedEmployee.id;
        employee.level = editedEmployee.level;
        employee.salary = editedEmployee.salary;
        return true;
    } else {
        return true;
    }
}

function destroyEmployee(editedEmployee, id) {
    var employee = findEmployee(id);
    var index = employees.indexOf(employee);

    employees.splice(index, 1);

    return true;
}

function validateEmployee(employee) {
    var valid = true;
    if (employee.id == "") {
        employee.id = getLastId() + 1;
    }

    if (isNaN(employee.id)) {
        employee.errors.push({
            field: 'id',
            message: "ID must be a number"
        });
        valid = false;
    } else {
        employee.id = parseInt(employee.id);
    }

    if (employee.name == "") {
        employee.errors.push({
            field: 'name',
            message: "Name must be present"
        });
        valid = false;
    }
    if (employee.surname == "") {
        employee.errors.push({
            field: 'surname',
            message: "Surname must be present"
        });
        valid = false;
    }

    if (employee.level == "") {
        employee.errors.push({
            field: 'level',
            message: "Level must be present"
        });
        valid = false;
    } else {
        if (isNaN(employee.level)) {
            employee.errors.push({
                field: 'level',
                message: "Level must be a number"
            });
            valid = false;
        } else {
            employee.level = parseInt(employee.level);
        }
    }

    if (employee.salary == "") {
        employee.errors.push({
            field: 'salary',
            message: "Salary must be present"
        });
        valid = false;
    } else {
        if (isNaN(employee.salary)) {
            employee.errors.push({
                field: 'salary',
                message: "Salary must be a number"
            });
            valid = false;
        } else {
            employee.salary = parseInt(employee.salary);
        }
    }

    employee.errors.forEach(function (elem, index, array) {
        console.log("ERRORS: " + elem.field + ": " + elem.message);
    });

    return valid;
}

function getLastId() {
    var id = 0;
    employees.forEach(function (elem, index, array) {
        if (elem.id > id) {
            id = elem.id;
        }
    });

    return id;
}

module.exports.all = getAllEmployees
module.exports.find = findEmployee
module.exports.create = addEmployee
module.exports.update = updateEmployee
module.exports.destroy = destroyEmployee