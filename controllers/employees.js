var employeesDA = require('../dataAccess/employees.js');
var Employee = require('../models/employee.js');

function index(request, response) {
    var employees = employeesDA.all();
    response.render('employees/index', {
        employees: employees
    });
}

function newEmployee(request, response) {
    var employee = new Employee();
    response.render('employees/new', {
        employee: employee
    });
}

function createEmployee(request, response) {
    var params = request.body;
    var employee = new Employee(params.id, params.name, params.surname, params.level, params.salary);

    if (employeesDA.create(employee)) {
        response.redirect('/employees');
    } else {
        response.render('employees/new', {
            employee: employee
        });
    }
}

function editEmployee(request, response) {
    var id = parseInt(request.params.id);
    var employee = employeesDA.find(id);
    if (employee == null) {
        response.status(404).send('Not found');
    } else {
        response.render('employees/edit', {
            employee: employee
        });
    }
}

function updateEmployee(request, response) {
    var id = parseInt(request.params.id);
    var params = request.body;

    var employee = employeesDA.find(id);
    if (employee == null) {
        response.status(404);
        return;
    }

    var editedEmployee = new Employee();
    editedEmployee.id = params.id;
    editedEmployee.name = params.name;
    editedEmployee.surname = params.surname;
    editedEmployee.level = params.level;
    editedEmployee.salary = params.salary;

    try {
        if (employeesDA.update(editedEmployee, id)) {
            response.redirect('/employees');
            return;
        } else {
            response.render('employees/edit', {
                employee: employee
            });
            return;
        }
    } catch (exception) {
        console.log(exception);
        response.status(500).send(exception);
    }
}

function destroyEmployee(request, response) {
    var id = parseInt(request.params.id);
    if (employeesDA.destroy(id)) {
        response.redirect('/employees');
    } else {
        response.render('employees/edit', {
            employee: employee
        });
    }
}

module.exports.index = index;
module.exports.new = newEmployee;
module.exports.create = createEmployee;
module.exports.edit = editEmployee;
module.exports.update = updateEmployee;
module.exports.destroy = destroyEmployee;