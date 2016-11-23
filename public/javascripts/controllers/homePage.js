function toggleEmployeeFormAction() {
    toggleEmployeeForm();
    cleanEmployeeForm();
}

function searchButtonClickAction() {
    var searchId = document.getElementById('searchId');
    var id = parseInt(searchId.value);
    if (isNaN(id)) {
        alert("Search ID must be a number");
        return;
    }

    window.location.href = "/homePage/find/" + id;
}

function destroyButtonClickAction() {
    var searchId = document.getElementById('searchId');
    var id = parseInt(searchId.value);
    if (isNaN(id)) {
        alert("Search ID must be a number");
        return;
    }

    window.location.href = "/homePage/destroy/" + id;
}