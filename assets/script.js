// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

// Storing all random arrays
var randomNumber = [];
var randomLower = [];
var randomUpper = [];
var randomSymbol = [];

// Function to pull characters from CharCode

function getCharCode(charcode1, charcodeLength, randomArray) {
  for (let i = 0; i < charcodeLength; i++) {
    randomArray.push(String.fromCharCode(charcode1++));
  }
}

// Pass arguments to getCharCode function
getCharCode(48, 10, randomNumber);
getCharCode(97, 26, randomLower);
getCharCode(65, 26, randomUpper);
getCharCode(33, 15, randomSymbol);

// Storing all user password criteria

var passwordLength = '';
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;
var confirmSymbols;

// Length of password prompt
function generatePassword() {
  var passwordLength = prompt(
    'How many characters would you like your password to be? (Choose between 8 and 128)'
  );

  // Check if password meets length criteria
  while (passwordLength < 8 || passwordLength > 128) {
    alert('Passwords must be between 8 and 128 characters. Please try again');
    var passwordLength = prompt(
      'How many characters would you like your password to be?'
    );
  }

  // Determine password criteria
  var confirmLowercase = confirm(
    'Click OK if you would like to include lowercase letters'
  );
  var confirmUppercase = confirm(
    'Click OK if you would like to include uppercase letters'
  );
  var confirmNumbers = confirm('Click OK if you would like to include numbers');
  var confirmSymbols = confirm(
    'Click OK to confirm if you would like to include symbols'
  );
  // Loop if answer is outside these parameters
  while (
    confirmUppercase === false &&
    confirmLowercase === false &&
    confirmSymbols === false &&
    confirmNumbers === false
  ) {
    alert('You must choose at least one parameter');
    var confirmSymbols = confirm(
      'Click OK to confirm if you would like to include special characters'
    );
    var confirmNumbers = confirm(
      'Click OK to confirm if you would like to include numeric characters'
    );
    var confirmLowercase = confirm(
      'Click OK to confirm if you would like to include lowercase characters'
    );
    var confirmUppercase = confirm(
      'Click OK to confirm if you would like to include uppercase characters'
    );
  }

  // Store parameters in password based on user confirmed criteria
  var password = [];

  if (confirmSymbols) {
    password = password.concat(randomSymbol);
  }

  if (confirmNumbers) {
    password = password.concat(randomNumber);
  }

  if (confirmLowercase) {
    password = password.concat(randomLower);
  }

  if (confirmUppercase) {
    password = password.concat(randomUpper);
  }

  // Empty password string to be filled based on for loop selecting random characters from the array
  var randomPassword = '';

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += password[Math.floor(Math.random() * password.length)];
  }
  return randomPassword;
}

//Click event listener

document.querySelector('#generate').addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = finalPassword;
}
