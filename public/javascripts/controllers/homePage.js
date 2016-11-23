// This is the controller for the homepage (Client side)

/*
 * This function toggles the form to insert data
 */
function toggleEmployeeFormAction() {
    toggleEmployeeForm();
    cleanEmployeeForm();
}

/*
 * This function launches the search by id
 */
function searchButtonClickAction() {
    var searchId = document.getElementById('searchId');
    var id = parseInt(searchId.value);
    if (isNaN(id)) {
        alert("Search ID must be a number");
        return;
    }

    window.location.href = "/homePage/find/" + id;
}

/*
 * This function launches the destroy by id
 */
function destroyButtonClickAction() {
    var searchId = document.getElementById('searchId');
    var id = parseInt(searchId.value);
    if (isNaN(id)) {
        alert("Search ID must be a number");
        return;
    }

    window.location.href = "/homePage/destroy/" + id;
}