/*
 * This is the employee structure.
 * The error structure is this:
 *  {
 *      field: 'name',
 *      message: 'Error for name'
 *  }
 */
var employee = function (id, name, surname, level, salary) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
    this.errors = [];
}

module.exports = employee;