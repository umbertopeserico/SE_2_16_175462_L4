var employeesDA = require('../dataAccess/employees.js');
var Employee = require('../models/employee.js');

function index(request, response) {
    var employees = employeesDA.getAllEmployees();
    response.render('employees/index', { employees: employees });
}

function newEmployee(request, response) {
    var employee = new Employee();
    response.render('employees/newEmployee', { employee: employee });
}

function createEmployee(request, response) {
    var parameters = request.body;
    console.log(parameters.name);
    var employee = new Employee();
    
    
    response.render('employees/newEmployee', { employee: employee });
}

module.exports.index = index;
module.exports.newEmployee = newEmployee;
module.exports.createEmployee = createEmployee;