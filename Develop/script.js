// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// When generate password btn clicked, user selects password criteria
var generatePassword = function () {
  var criteria = prompt(
    `Please select your password Criteria. Enter 1 for Length, enter 2 for types, enter 3 for both.`
  );

  criteria = parseInt(criteria);

  if (criteria === 1 || criteria === 3) {
    passwordLength();
    characterType();
  }

  passwordLength = parseInt(passwordLength);
};

var passwordLength = prompt(
  `Great! Between 8 and 128, how many characters would you like your password to be?`
);

var characterType = prompt(`Click OK`);
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
