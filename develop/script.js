// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q","r","s","t","v","w","x","y", "z"];
  var numCharacter = prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
  let returnString= " ";
  console.log(numCharacter);
  for (let i = 0; i < numCharacter; i++) {
     returnString += lowCharacters[Math.floor(Math.random() * lowCharacters.length)]
    }
    return returnString;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  



// let specialCharacter = ["$", "@", "!", "?", "^"];
// let numCharacter = window.prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
// console.log(numCharacter);
//  for (let i = 0; i <numCharacter.length; i++){
//  }
//  return(specialCharacter[Math.floor(Math.random()*specialCharacter.length)])
//  console.log(specialCharacter);



// user selects which criteria to include

//user decides how long the password is

// user chooses character types in password
  // (lowercase, uppercase, numeric, and/or special characters)

// each prompt answered-- input is validated and at least one character type is selected

//when all prompts answered, password is generated
//password is either an alert or written on page 