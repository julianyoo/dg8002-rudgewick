/* MOBILE MENU */
function mobileMenu() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/* EVENT FILTER */

function eventFilter () {
    if (document.getElementById("filter").checked === true) {
        document.getElementById("beer").style.display = "none";
    }
    else {
        document.getElementById("beer").style.display = "block";
    }
}

/* COUNTDOWN TIMER */

var countDownDate = new Date("August 27, 2020 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "IT'S HERE!";
  }
}, 1000);

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
var days = [0, 0, 0]
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
    } else {
        days[0] = 0
    };

    if (document.getElementById("day2").checked === true) {
        days[1] = 1
    } else {
        days[1] = 0
    };

    if (document.getElementById("day3").checked === true) {
        days[2] = 1
    } else {
        days[2] = 0
    };

    multiplier = days[0] + days[1] + days[2];
}

function grandTotal() {
    var adultCost = 0
    adultCost = adultTotal * 10 * multiplier;

    var childCost = 0;
    childCost = childTotal * 5 * multiplier;

    var foodCost = 0
    foodCost = foodTotal * 3

    var rideCost = 0
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
        var days = [0, 0, 0]
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
    if (total > 0) {
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
        document.getElementById("fname").classList.add("formError");
        document.getElementById("fname").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("fname").classList.remove("formError");
    }

    if (document.getElementById("lname").value === "") {
        isValid = false;
        document.getElementById("lname").classList.add("formError");
        document.getElementById("lname").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("lname").classList.remove("formError");
    }

    if (document.getElementById("email").value === "") {
        isValid = false;
        document.getElementById("email").classList.add("formError");
        document.getElementById("email").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("email").classList.remove("formError");
    }

    if (document.getElementById("phone").value === "") {
        isValid = false;
        document.getElementById("phone").classList.add("formError");
        document.getElementById("phone").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("phone").classList.remove("formError");
    }

    if (document.getElementById("street").value === "") {
        isValid = false;
        document.getElementById("country").classList.add("formError");
        document.getElementById("country").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("country").classList.remove("formError");
    }

    if (document.getElementById("street").value === "") {
        isValid = false;
        document.getElementById("street").classList.add("formError");
        document.getElementById("street").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("street").classList.remove("formError");
    }

    if (document.getElementById("postal").value === "") {
        isValid = false;
        document.getElementById("postal").classList.add("formError");
        document.getElementById("postal").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("postal").classList.remove("formError");
    }

    if (document.getElementById("city").value === "") {
        isValid = false;
        document.getElementById("city").classList.add("formError");
        document.getElementById("city").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("city").classList.remove("formError");
    }

    if (document.getElementById("cc").value === "") {
        isValid = false;
        document.getElementById("cc").classList.add("formError");
        document.getElementById("cc").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("cc").classList.remove("formError");
    }

    if (document.getElementById("expiry").value === "") {
        isValid = false;
        document.getElementById("expiry").classList.add("formError");
        document.getElementById("expiry").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("expiry").classList.remove("formError");
    }

    if (document.getElementById("cvc").value === "") {
        isValid = false;
        document.getElementById("cvc").classList.add("formError");
        document.getElementById("cvc").scrollIntoView();
    } else {
        isValid = true;
        document.getElementById("cvc").classList.remove("formError");
    }

    purchaseTickets();
}

function purchaseTickets() {
    if (isValid === true) {
        document.getElementById("contact").style.display = "none"
        document.getElementById("thankyou").style.display = "block"
    }
    else {
        alert("Please fill out the required fields highlighted in red.")
    }
}

function leggo() {
    if (document.getElementById("filter").checked === true) {
        document.getElementById("myModal").style.display = "block";
    }
    else {
        document.getElementById("myModal2").style.display = "block";
    }
}


function closeModal () {
document.getElementById("myModal").style.display = "none";
document.getElementById("myModal2").style.display = "none";
}
