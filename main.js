/* CONTACT FORM LOGIC */

function validate_contact() {
    var getType = document.getElementById("formType");
    var selectedValue = getType.options[getType.selectedIndex].value;
    if (selectedValue == "general") {
        document.getElementById("general").style.display = "block";
        document.getElementById("park").style.display = "none";
        document.getElementById("vendor").style.display = "none";
        document.getElementById("camping").style.display = "none";
    } else if (selectedValue == "park") {
        document.getElementById("park").style.display = "block";
        document.getElementById("general").style.display = "none";
        document.getElementById("vendor").style.display = "none";
        document.getElementById("camping").style.display = "none";
    } else if (selectedValue == "vendor") {
        document.getElementById("vendor").style.display = "block";
        document.getElementById("general").style.display = "none";
        document.getElementById("park").style.display = "none";
        document.getElementById("camping").style.display = "none";
    } else if (selectedValue == "camping") {
        document.getElementById("camping").style.display = "block";
        document.getElementById("general").style.display = "none";
        document.getElementById("park").style.display = "none";
        document.getElementById("vendor").style.display = "none";
    }
}