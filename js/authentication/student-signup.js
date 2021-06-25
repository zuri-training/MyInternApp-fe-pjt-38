const form = document.getElementById("signup_form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const city = document.getElementById("city");
const school = document.getElementById("school");
const level = document.getElementById("level");
const skill = document.getElementById("skill");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Validate form inputs
	validateForm();
});

// Validate Form Inputs Function
function validateForm() {
	// get the values from the inputs
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const countryValue = country.value.trim();
	const cityValue = city.value.trim();
	const schoolValue = school.value.trim();
	const levelValue = level.value.trim();
	const skillValue = skill.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	// Check Email
	if (emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Please enter a valid email");
	} else {
		setSuccessFor(email);
	}

	// Check Number
	if (phoneValue === "") {
		setErrorFor(phone, "Phone number cannot be blank");
	} else if (isNaN(phoneValue)) {
		setErrorFor(phone, "Please enter a valid phone number");
	} else {
		setSuccessFor(phone);
	}

	// Check country
	if (countryValue === "") {
		setErrorFor(country, "Please select a country");
	} else {
		setSuccessFor(country);
	}

	// Check City
	if (cityValue === "") {
		setErrorFor(city, "Please enter a city");
	} else {
		setSuccessFor(city);
	}

	// Check School
	if (schoolValue === "") {
		setErrorFor(school, "School cannot be blank");
	} else {
		setSuccessFor(school);
	}

	// Check Level
	if (levelValue === "") {
		setErrorFor(level, "Please select a level");
	} else {
		setSuccessFor(level);
	}

	// Check LevSkills
	if (skillValue === "") {
		setErrorFor(skill, "Please enter a skill");
	} else {
		setSuccessFor(skill);
	}

	// Check passwords
	if (passwordValue === "") {
		setErrorFor(password, "Password cannot be blank");
	} else {
		setSuccessFor(password);
	}

	// Check password2
	if (password2Value === "") {
		setErrorFor(password2, "Password confirmation is required");
	} else if (password2Value !== passwordValue) {
		setErrorFor(password2, "Passwords do not match");
	} else {
		setSuccessFor(password2);
	}
}

// Set Error Class Function
function setErrorFor(input, message) {
	const formInputContainer = input.parentElement;
	const errorMessage = formInputContainer.querySelector(".error-message");

	// add error message inside error message class
	errorMessage.innerText = message;

	// add error class to input
	formInputContainer.classList.add("error");
}

// Remove Error class from input
function setSuccessFor(input) {
	const formInputContainer = input.parentElement;

	// add error class to input
	formInputContainer.classList.remove("error");
}

// Check for valid email
function isEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
