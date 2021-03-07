// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "<>?/)(*&^%$£@";

var userWantsUpper = confirm("Would you want Upper Case Characters in your password?")
var userWantsLower = confirm("Would you want Lower Case Characters in your password?")
var userWantsNumbers = confirm("Would you want Numbers in your password?")
var userWantsSpecials = confirm("Would you want Special Characters in your password?")

if (userWantsUpper === false && userWantsLower === false && userWantsSpecials === false && userWantsNumbers === false){
  alert("Password not suitable: Please select at least one option for character types");
  return ""; 
}

  return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
