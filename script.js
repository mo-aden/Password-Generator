// Assignment Code
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

const generatePassword = function () {
  const passwordLength = Number(
    prompt(`Enter the length of the password between 8 and 128 characters.`)
  );

  if (isNaN(passwordLength)) {
    alert(`Please enter a number`);
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert(`Password length should be between 8 - 128 characters`);
  } else {
    const useLowerCase = confirm(`Do you want to include lowercase letters?`);
    const useUpperCase = confirm(`Do you want to include uppercase Letters?`);
    const useNumeric = confirm(`Do you want to include numbers?`);
    const useSpecialCharacters = confirm(
      `Do you want to include special characters?`
    );

    //Letters that will be used to change uppaerCase / LowerCase
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const upperCaseLetters = [];
    const lowerCaseLetters = [];
    const numericDigits = [];
    const specialCharacters = ['!', '@', '#', '%', '&', '*', '$'];

    //Update the arrays
    letters.forEach((letter) => {
      upperCaseLetters.push(letter.toUpperCase());
      lowerCaseLetters.push(letter.toLowerCase());
    });

    for (let i = 0; i < 10; i++) {
      numericDigits.push(i);
    }

    //Options car for user requirements & update them with optional chaining
    const optionsCart = [];

    useLowerCase && optionsCart.push(lowerCaseLetters);
    useUpperCase && optionsCart.push(upperCaseLetters);
    useNumeric && optionsCart.push(numericDigits);
    useSpecialCharacters && optionsCart.push(specialCharacters);

    const newOptionsArr = optionsCart.flat();

    const passwordArr = [];

    for (let i = 0; i < passwordLength; i++) {
      const randomItem = Math.floor(Math.random() * newOptionsArr.length);
      passwordArr.push(newOptionsArr[randomItem]);
    }
    return passwordArr.join('');
  }
  // console.log(passwordArr);
};

// Write password to the #password input
function writePassword() {
  passwordText.value = '';

  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
