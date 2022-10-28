// Assignment Code
var generateBtn = document.querySelector('#generate');

const generatePassword = function () {
  const passwordLength = Number(
    prompt(`Enter the length of the password between 8 and 128 characters.`)
  );

  isNaN(passwordLength) && alert(`Please enter a number`);
  (passwordLength < 8 || passwordLength > 128) &&
    alert(`Password length should be between 8 - 128 characters`);

  const useLowerCase = confirm(`Do you want to include lowercase letters?`);
  const useUpperCase = confirm(`Do you want to include uppercase Letters?`);
  const useNumeric = confirm(`Do you want to include numbers?`);
  const useSpecialCharacters = confirm(
    `Do you want to include special characters?`
  );

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split(' ');
  console.log(letters);

  cosnt;

  console.log(typeof passwordLength, passwordLength);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  console.log(`I am clicked`);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
