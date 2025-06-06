console.log("JS loaded successfully");

//this is for heading search bar,if  input is mario turn to productpage1
document.getElementById("searchBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById("searchInput").value.trim().toLowerCase();    //to make "Mario","mario","  MARIO" same//
    if (input === "mario") {
        window.location.href = "searchresult.html";
    }
});

//this is for heading search bar in moblie mode,if  input is mario turn to productpage1
document.getElementById("searchBtn2").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById("searchInput2").value.trim().toLowerCase();    //to make "Mario","mario","  MARIO" same//
    if (input === "mario") {
        window.location.href = "searchresult.html";
    }
});


//this is for responsived burger menu hide/show//
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burgerBtn");
    const menu = document.getElementById("burgerMenu");

    burger.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

});



//this is for verify user input data is email or not,can be used in footer//
const input = document.getElementById("emailInput");
const button = document.getElementById("subscribeBtn");

button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!emailPattern.test(email)) {
        input.value = ""; // Clear the input field
        input.placeholder = "Please enter a valid email";
        input.classList.add("error"); // Add error class for styling
    } else {
        alert("Thank you for subscribing!");
    }
});
input.addEventListener("focus", function () {                //when user click on input field,placeholder will be change back to default//
    input.placeholder = "Enter your email address";
    input.classList.remove("error"); // Remove error class on focus
});












//this is for verify user input in checkout page//
document.addEventListener("DOMContentLoaded", function () {
const btn = document.getElementById("confirmPayBtn");
document.getElementById("confirmPayBtn").addEventListener("click", function(event) {
    console.log("Confirm button clicked");
    event.preventDefault();
    
    const inputs = document.querySelectorAll("input[data-type]");
    let isValid = true;

    inputs.forEach(function(input) {
        const value = input.value.trim();
        const type = input.getAttribute("data-type");
        input.classList.remove("error");

    //input cant be empty//
    if (value === "") {
            input.value = "";
            input.placeholder = "This item cannot be empty";
            input.classList.add("error");
            isValid = false;
            return;
        }
    //format of each input//
    let pattern;
        switch (type) {
            case "name":
            case "city":
            case "state":
                pattern = /^[a-zA-Z\s\-']{2,}$/;
                break;

            case "country":
                pattern = /^[a-zA-Z\s\-]{2,}$/;
                break;
            
            case "postcode":
                pattern = /^\d{4}$/;
                break;

            case "address":
                pattern = /^.{5,}$/;
                break;

            case "card":
                pattern = /^\d{16}$/;
                break;

            case "expiry":
                pattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
                break;

            case "cvv":
                pattern = /^\d{3,4}$/;
                break;

            default:
                break;
        }

        if (pattern && !pattern.test(value)) {               //check if input value matches the pattern//
            input.value = "";
            input.placeholder = "Please enter a valid information";
            input.classList.add("error");
            isValid = false;
        }
    });

    if (isValid) {                               //if all valid go to confirmation page//
        window.location.href = "confirmation.html"; 
    }
});
document.querySelectorAll("input[data-type]").forEach(function (input) {
    input.addEventListener("focus", function () {
        input.classList.remove("error");
        input.placeholder = input.getAttribute("data-placeholder");
    });
});
});