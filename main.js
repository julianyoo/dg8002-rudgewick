/* CONTACT FORM LOGIC */

function validate() {
    var getType = document.getElementById("formType");
    var selectedValue = getType.options[getType.selectedIndex].value;
    if (selectedValue == "general") {
        alert("You selected general");
    } else if (selectedValue == "park") {
        alert("You selected Park!");
    } else if (selectedValue == "vendor") {
        alert("You selected vendor!");
    } else if (selectedValue == "camping") {
        alert("You selected camping!");
    }
}