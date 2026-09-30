let namePattern = /^[A-Za-z ]+$/;
let mobilePattern = /^[0-9]{10}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function submitForm() {

    // Section 1: Name - re-prompt until a valid, non-empty name is entered
    let name = document.getElementById("name").value;
    while (name === "" || !namePattern.test(name)) {
        name = prompt("Invalid name. Please enter a valid name (letters only):");
        if (name === null) return;
    }
    document.getElementById("name").value = name;

    // Section 2: Address, City, State - must not be empty
    let address = document.getElementById("address").value;
    while (address === "") {
        address = prompt("Address cannot be empty. Please enter your address:");
        if (address === null) return;
    }
    document.getElementById("address").value = address;

    let city = document.getElementById("city").value;
    while (city === "") {
        city = prompt("City cannot be empty. Please enter your city:");
        if (city === null) return;
    }
    document.getElementById("city").value = city;

    let state = document.getElementById("state").value;
    while (state === "") {
        state = prompt("State cannot be empty. Please enter your state:");
        if (state === null) return;
    }
    document.getElementById("state").value = state;

    // Section 3: Gender - must be selected
    let genderRadios = document.getElementsByName("gender");
    let gender = "";
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].value;
        }
    }
    if (gender === "") {
        alert("Please select a gender.");
        return;
    }

    // Section 4: Mobile Number - re-prompt until valid 10 digit number
    let mobile = document.getElementById("mobile").value;
    while (mobile === "" || !mobilePattern.test(mobile)) {
        mobile = prompt("Invalid mobile number. Please enter a 10 digit number:");
        if (mobile === null) return;
    }
    document.getElementById("mobile").value = mobile;

    // Section 5: Email - re-prompt until valid email
    let email = document.getElementById("email").value;
    while (email === "" || !emailPattern.test(email)) {
        email = prompt("Invalid email address. Please enter a valid email:");
        if (email === null) return;
    }
    document.getElementById("email").value = email;

    // Section 6: Congratulation and welcome page upon successful entries
    document.body.innerHTML =
        "<h1>Congratulations, " + name + "!</h1>" +
        "<h3>Welcome aboard.</h3>" +
        "<p>Address: " + address + ", " + city + ", " + state + "</p>" +
        "<p>Gender: " + gender + "</p>" +
        "<p>Mobile: " + mobile + "</p>" +
        "<p>Email: " + email + "</p>";
}
