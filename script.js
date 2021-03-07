// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Declare variables needed to create the final password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "<>?/)(*&^%$£@";

//Get the characters that a user wants and validate
var userWantsUpper = confirm("Would you want Upper Case Characters in your password?")
var userWantsLower = confirm("Would you want Lower Case Characters in your password?")
var userWantsNumbers = confirm("Would you want Numbers in your password?")
var userWantsSpecials = confirm("Would you want Special Characters in your password?")

if (userWantsUpper === false && userWantsLower === false && userWantsSpecials === false && userWantsNumbers === false){
  alert("Password not suitable: Please select at least one option for character types");
  return ""; 
}
// Get the length of password that the user wants and validate
var lengthOfPasswordString = prompt("What length of password would you like?");
var lengthOfPasswordNumber = parseInt(lengthOfPasswordString);

if (lengthOfPasswordNumber < 8 || lengthOfPasswordNumber > 128 ){
  alert("Password not suitable: Please enter a number greater than 8 and less than 128");
  return "";
}

//Generate a password using the selection
var passwordOptions = "";
var passwordFinal = "";

if (userWantsUpper === true){
  passwordOptions += upperCase;
  passwordFinal += upperCase[Math.floor(Math.random() * upperCase.length)];
}

if (userWantsLower === true){
  passwordOptions += lowerCase;
  passwordFinal += lowerCase[Math.floor(Math.random() * lowerCase.length)]
}

if (userWantsNumbers === true){
  passwordOptions += numbers;
  passwordFinal += numbers[Math.floor(Math.random() * numbers.length)]
}

if (userWantsSpecials === true){
  passwordOptions += special;
passwordFinal += special[Math.floor(Math.random() * special.length)]
}

for (var i = passwordFinal.length; i <= lengthOfPasswordNumber -1 ; i++){
  passwordFinal += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
}

  return passwordFinal
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
