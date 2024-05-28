const myForm = document.getElementById("form");
const myButton = document.getElementById("button");
const myFirstName = document.querySelector(".firstName");
const myLastName = document.querySelector(".lastName");
const myEmail = document.querySelector(".email");
const password = document.querySelector(".password");
const myFirstNameErrorText = document.getElementById("firstname-error-text");
const passwordErrorText = document.getElementById("password-error-text");
const myLastNameErrorText = document.getElementById("lastname-error-text");
const myEmailErrorText = document.getElementById("email-error-text");
const showPassword = document.getElementById("show-password");
const hidePassword = document.getElementById("hidepassword");


myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = myFirstName.value;
  const lName = myLastName.value;
  const emailVal = myEmail.value;
  const passwordVal = password.value;


  // Check first name
  if (fName.match(/^\s*$/)) {
    myFirstName.classList.add("error");
    myFirstNameErrorText.style.visibility = "visible";
  } else {
    myFirstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    myLastName.classList.add("error");
    myLastNameErrorText.style.visibility = "visible";
  } else {
    myLastName.classList.remove("error");
    myLastNameErrorText.style.visibility = "hidden";
  }

  // Check email
  if (emailVal === "") {
    myEmail.classList.add("error");
    myEmailErrorText.style.visibility = "visible";
    myEmailErrorText.textContent = "please enter your email";
  } else if (!validateEmail(emailVal)) {
    myEmail.classList.add("error");
    myEmailErrorText.style.visibility = "visible";

    myEmailErrorText.textContent = "This is not a valid email";
  } else {
    myEmail.classList.remove("error");
    myEmailErrorText.style.visibility = "hidden";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    passwordErrorText.style.visibility = "visible";
    showPassword.style.visibility = "hidden";
    hidePassword.style.visibility = "hidden";
  } else {
    password.classList.remove("error");
    passwordErrorText.style.visibility = "hidden";
  }
});

//hide and reveals password
function revealPassword() {
  if (password.type === "password") {
    password.type = "text";
    showPassword.style.visibility = "hidden";
    hidePassword.style.visibility = "visible";
  } else {
    password.type = "password";
    showPassword.style.visibility = "visible";
    hidePassword.style.visibility = "hidden";
  }
}

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}