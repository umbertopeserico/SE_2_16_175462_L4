var employeesDA = require('../dataAccess/employees.js');
var Employee = require('../models/employee.js');

function home(request, response) {
    response.render('homePage', {
        employee: new Employee
    });
}

function find(request, response) {
    var id = parseInt(request.params.id);

    var employee = employeesDA.find(id);

    if (employee == null) {
        employee = new Employee;
    }

    response.render('homePage', {
        employee: employee,
        displayForm: 'block'
    });
}

function save(request, response) {
    var params = request.body;
    var id = params.id;

    var employee = employeesDA.find(id);

    if (employee == null) {
        console.log("EMPLOYEE NOT FOUND");
        employee = new Employee(params.id, params.name, params.surname, params.level, params.salary);
        employeesDA.create(employee);
    } else {
        var editedEmployee = new Employee();
        editedEmployee.id = params.id;
        editedEmployee.name = params.name;
        editedEmployee.surname = params.surname;
        editedEmployee.level = params.level;
        editedEmployee.salary = params.salary;
        employeesDA.update(editedEmployee, id);
    }

    response.render('homePage', {
        employee: (editedEmployee === undefined ? employee : editedEmployee),
        displayForm: 'block'
    });
}

function destroy(request, response) {
    var id = parseInt(request.params.id);

    var employee = employeesDA.find(id);
    if (employee == null) {
        employee = new Employee;
    } else {
        if (employeesDA.destroy(id)) {
            employee = new Employee;
        }
    }

    response.render('homePage', {
        employee: employee,
        displayForm: 'block'
    });
}

module.exports.home = home;
module.exports.find = find;
module.exports.save = save;
module.exports.destroy = destroy;