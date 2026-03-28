function showMessage() {
    alert("Welcome to the Landing Page!");
}

function featureClick(feature) {
    alert(feature + " feature clicked");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}