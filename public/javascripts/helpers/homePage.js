function toggleEmployeeForm() {
    var fieldset = document.getElementById('employeeFieldset');
    fieldset.style.display = (fieldset.style.display == 'block' ? "none" : "block");
}

function cleanEmployeeForm() {
    var form = document.getElementById('employeeForm');
    var formElements = form.querySelectorAll('input');
    formElements.forEach(function (elem, index, array) {
        elem.value = "";
    });
}