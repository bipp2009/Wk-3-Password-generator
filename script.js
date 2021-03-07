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
