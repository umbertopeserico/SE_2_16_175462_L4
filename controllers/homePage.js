var Employee = require('../models/employee.js');

function home(request, response) {
    response.render('homePage', {
        employee: new Employee
    });
}

module.exports.home = home;