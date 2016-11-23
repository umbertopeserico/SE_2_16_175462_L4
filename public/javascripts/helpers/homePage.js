function toggleEmployeeForm() {
    var fieldset = document.getElementById('employeeFieldset');
    fieldset.style.display = (fieldset.style.display == 'block' ? "none" : "block");
}

function cleanEmployeeForm() {
    var form = document.getElementById('employeeForm');
    var formInputs = form.querySelectorAll('input');
    formInputs.forEach(function (elem, index, array) {
        elem.value = "";
    });

    var formErrros = form.querySelectorAll('.error');
    formErrros.forEach(function (elem, index, array) {
        form.removeChild(elem);
    });
}