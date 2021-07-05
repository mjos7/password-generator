// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

//Variables and event listeners

document.querySelector('#generate').addEventListener('click', writePassword);

var randomLower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var randomUpper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var randomSymbol = [
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];

var passwordLength = '';
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSymbols;

// Length of password prompt
function generatePassword() {
  var passwordLength = prompt(
    'How many characters would you like your password to be? (Choose between 8 and 128)'
  );

  // check if password meets length criteria
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
  // Loop if answer is outside the parameters
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

  // store parameters in password based on user confirmed criteria
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

  // console.log(password);

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = '';

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += password[Math.floor(Math.random() * password.length)];
  }
  return randomPassword;
}

// Writes password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = finalPassword;
}

// Copy code to clipboard

var copy = document.querySelector('#copy');
copy.addEventListener('click', function () {
  copyPassword();
});

function copyPassword() {
  document.getElementById('password').select();
  document.execCommand('Copy');
  alert('Password copied to clipboard!');
}
