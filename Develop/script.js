// Assignment code here

// USER CRITERIA STORED HERE
const userCriteria = {
  passwordLength: 8,
  confirmLowercase: false,
  confirmUppercase: false,
  confirmNumeric: false,
  confirmSymbols: false,
};

const randomFunc = {
  lower: genRandomLower,
  upper: genRandomUpper,
  number: genRandomNumber,
  symbol: genRandomSymbol,
};

// Determine parameters of password

function selectCriteria() {
  userCriteria.passwordLength = parseInt(
    window.prompt(
      `How many characters would you like your password to be? (Choose between 8 and 128)`
    )
  );
  userCriteria.confirmLowercase = window.confirm(
    'Click OK if you would like to include lowercase letters'
  );
  userCriteria.confirmUppercase = window.confirm(
    'Click OK if you would like to include uppercase letters'
  );
  userCriteria.confirmNumeric = window.confirm(
    'Click OK if you would like to include numbers'
  );
  userCriteria.confirmSymbols = window.confirm(
    'Click OK if you would like to include symbols'
  );
}

selectCriteria();

function generatePassword(length, lower, upper, symbol, length) {
  let generatedPassword = '';
  const typesCount = length + lower + upper + number + symbol;
  const typesArr = [
    { length },
    { lower },
    { upper },
    { number },
    { symbol },
  ].filter(item => Object.values(item)[0]);

  // If no criteria selected
  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// generatePassword(
//   userCriteria.passwordLength,
//   userCriteria.confirmLowercase,
//   userCriteria.confirmUppercase,
//   userCriteria.confirmNumeric,
//   userCriteria.confirmSymbols
// );

// Loop if answer is outside the parameters
// while (
//   confirmLowercase === false &&
//   confirmUppercase === false &&
//   confirmSymbols === false &&
//   confirmNumeric === false
// ) {
//   alert('You must choose at least one parameter');
//   selectCriteria();
// }

// Gen functions
function genRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function genRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function genRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function genRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

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

console.log(finalPassword);

/* Comment start




var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSymbols;

var passwordCriteria = [];



// collect criteria via prompts

var generatePassword = function () {


  includeLowercase = window.prompt(
    `Would you like to include lowercase letters? (Please enter YES or NO)`
  );

  includeUppercase = window.prompt(
    `Would you like to include uppercase letters? (Please enter YES or NO)`
  );

  includeNumbers = window.prompt(
    `Would you like to include numbers? (Please enter YES or NO)`
  );

  includeSymbols = window.prompt(
    `Would you like to include special characters? (Please enter YES or NO)`
  );
};

// convert all "Yes" to lowercase

// var includeLowercase = includeLowercase.toLowerCase();
// var includeUppercase = includeUppercase.toLowerCase();
// var includeNumbers = includeNumbers.toLowerCase();
// var includeSymbols = includeSymbols.toLowerCase();

console.log(includeLowercase);
// convert yes to boolean

if (includeLowercase === yes) {
  var passwordCriteria = [includeLowercase];
}

if (includeUppercase === yes) {
  passwordCriteria.push('includeUppercase');
}

console.log(passwordCriteria);

// if true include in validation screen
// ensure at least one criteria is met
// add error screen if passwordLength is not met
// add error screens if yes or no are not input
// take passwordLength & all trues, and include in criteria for password generator
// display password on page

// validate criteria

// var confirmSelection = window.prompt(`You've chosen to include:
// - ${passwordLength} characters in your password
// - lowercase = ${lowercase}
// - uppercase = ${uppercase}
// - number = ${numeric}
// - special characters = ${specialCharacters}

// Confirm by typing "YES" To make changes, type "CHANGE"`);

// When generate password btn clicked, user selects password criteria
// var generatePassword = function (
//   passwordLength,
//   lowercase,
//   uppercase,
//   numeric,
//   specialCharacters
// ) {

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

comment end */
