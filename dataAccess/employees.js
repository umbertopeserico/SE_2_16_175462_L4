// This imports the model of an employee
var employee = require('../models/employee.js');

// This is a fake data source until a database is implemented
var employees = [];

// This is a default employee inserted
employees.push(new employee(1, "Umberto", "Peserico", '1', '2'));

/*
 * This function retrieves all employees
 */
function getAllEmployees() {
    return employees;
}

/*
 * This function adds a new employee validating it
 */
function addEmployee(employee) {
    if (validateEmployee(employee)) {
        employees.push(employee);
        return true;
    } else {
        return false;
    }
}

/*
 * This function retrieves an employee by id
 */
function findEmployee(id) {
    var employee = null;
    getAllEmployees().forEach(function (elem, index, array) {
        if (elem.id == id) {
            employee = elem;
        }
    });
    return employee;
}

/*
 * This function updates an employee validating it
 */
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

/*
 * This function destroys an employee by id
 */
function destroyEmployee(editedEmployee, id) {
    var employee = findEmployee(id);
    var index = employees.indexOf(employee);

    employees.splice(index, 1);

    return true;
}

/*
 * This function validates an employee.
 * The error structure is this:
 *  {
 *      field: 'name',
 *      message: 'Error for name'
 *  }
 */
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

/*
 * This function retrieves greater id in the datastore
 */
function getLastId() {
    var id = 0;
    getAllEmployees().forEach(function (elem, index, array) {
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