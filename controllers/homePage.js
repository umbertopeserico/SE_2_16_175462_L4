// Imports to use in this file
var employeesDA = require('../dataAccess/employees.js');
var Employee = require('../models/employee.js');

/*
 * This function shows the home page
 */
function home(request, response) {
    response.render('homePage', {
        // This line is used to pass to a view a valid JavaScript object insted of null
        employee: new Employee
    });
}

/*
 * This function searches an employee by id
 */
function find(request, response) {
    var id = parseInt(request.params.id);

    var employee = employeesDA.find(id);

    if (employee == null) {
        // This line is used to pass to a view a valid JavaScript object insted of null
        employee = new Employee;
    }

    response.render('homePage', {
        employee: employee,
        displayForm: 'block'
    });
}

/*
 * This function manages the save of an employee:
 * If employee exists, it is updates
 * else it's created
 */
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
        // This line select the correct variable to pass to the view
        employee: (editedEmployee === undefined ? employee : editedEmployee),
        displayForm: 'block'
    });
}

/*
 * This function destroys an employee by id
 */
function destroy(request, response) {
    var id = parseInt(request.params.id);

    var employee = employeesDA.find(id);
    if (employee == null) {
        // This line is used to pass to a view a valid JavaScript object insted of null
        employee = new Employee;
    } else {
        if (employeesDA.destroy(id)) {
            // This line is used to pass to a view a valid JavaScript object insted of null
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