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

function thankYou() {
    document.getElementById("contact-subject").style.display = "none";
    document.getElementById("formType").style.display = "none";
    document.getElementById("park").style.display = "none";
    document.getElementById("general").style.display = "none";
    document.getElementById("vendor").style.display = "none";
    document.getElementById("camping").style.display = "none";
    document.getElementById("thank_you").innerHTML = "Your message was sent! Thank you.";
}

/* TICKET PURCHASE LOGIC */

var adultTotal = 0
var childTotal = 0
var foodTotal = 0
var rideTotal = 0
var multiplier = 0
var days = [0,0,0]
var total = 0

/* Ticketing buttons */

function addAdult() {
    adultTotal++
    return document.getElementById("adult_total").innerHTML = adultTotal;
}

function subAdult() {
    if (adultTotal <= 0) {

    } else {
        adultTotal--
        return document.getElementById("adult_total").innerHTML = adultTotal;
    }
}

function addChild() {
    childTotal++
    return document.getElementById("child_total").innerHTML = childTotal;
}

function subChild() {
    if (childTotal <= 0) {

    } else {
        childTotal--
        return document.getElementById("child_total").innerHTML = childTotal;
    }
}

function addFood() {
    foodTotal++
    return document.getElementById("food_total").innerHTML = foodTotal;
}

function subFood() {
    if (foodTotal <= 0) {

    } else {
        foodTotal--;
        return document.getElementById("food_total").innerHTML = foodTotal;
    }
}

function addRide() {
    rideTotal++
    return document.getElementById("ride_total").innerHTML = rideTotal;
}

function subRide() {
    if (rideTotal <= 0) {

    } else {
        rideTotal--;
        return document.getElementById("ride_total").innerHTML = rideTotal;
    }
}

function checkMultiplier() {
    if (document.getElementById("day1").checked === true) {
        days[0] = 1
    }

    else {
        days[0] = 0
    };

    if (document.getElementById("day2").checked === true) {
        days[1] = 1
    }

    else {
        days[1] = 0
    };

    if (document.getElementById("day3").checked === true) {
        days[2] = 1
    }

    else {
        days[2] = 0
    };

   multiplier = days[0] + days[1] + days[2];
}

function grandTotal() {
    var adultCost=0
    adultCost = adultTotal * 10 * multiplier;
    
    var childCost=0;
    childCost = childTotal * 5 * multiplier;

    var foodCost=0
    foodCost = foodTotal * 3

    var rideCost=0
    rideCost = rideTotal * 4

    total = adultCost + childCost + foodCost + rideCost

    return document.getElementById("grand_total").innerHTML = "£" + total,
    document.getElementById("contact_total").innerHTML = "£" + total
}

function clearAll() {
    if (confirm("Are you sure you want to start over?")) {
        var adultTotal = 0
        var childTotal = 0
        var foodTotal = 0
        var rideTotal = 0
        var multiplier = 0
        var days = [0,0,0]
        var total = 0
        grandTotal();
        document.getElementById("grand_total").innerHTML = "£" + total
        document.getElementById("adult_total").innerHTML = adultTotal;
        document.getElementById("child_total").innerHTML = childTotal;
        document.getElementById("food_total").innerHTML = foodTotal;
        document.getElementById("ride_total").innerHTML = rideTotal;
        document.getElementById("day1").checked = false;
        document.getElementById("day2").checked = false;
        document.getElementById("day3").checked = false;
    } else {

    }
}

function next() {
    if (total > 0 ) {
    document.getElementById("calculator").style.display = "none"
    document.getElementById("contact").style.display = "block"
    document.getElementById("warning").innerHTML = ""
} else {
    document.getElementById("warning").innerHTML = "You must have something in your basket in order to continue with the transaction."
}
}

function back() {
    document.getElementById("calculator").style.display = "block"
    document.getElementById("contact").style.display = "none"
}

var isValid = false;

function submit() {
    if (document.getElementById("fname").value === "") {
        isValid = false;
        alert('form is bad')
    } else {
        isValid = true;
    }

    if (document.getElementById("lname").value === "") {
        isValid = false;
        alert('form is bad')
    } else {
        isValid = true;
    }

    if (isValid === true) {
        alert("form is gud")
    }
}
