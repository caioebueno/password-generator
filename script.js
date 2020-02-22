// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts

var lowerCaseChars = "abcdefghijklmnopqrstuvxwyzabcdefghijklmnopqrstuvxwyzabcdefghijklmnopqrstuvxwyzabcdefghijklmnopqrstuvxwyzabc";

var upperCaseChars = "ABCDEFGHIJLMNOPQRSTUVXWYZABCDEFGHIJLMNOPQRSTUVXWYZABCDEFGHIJLMNOPQRSTUVXWYZABCDEFGHIJLMNOPQRSTUVXWYZAABC";

var numbersChars = "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";

var specialChars = "!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*+!#@*$^&*&*";

var lowerCaseFunc = "";

var upperCaseFunc = "";

var numberFunc = "";

var specialFunc = "";

//Random function

function random(){
  number = Math.floor(Math.random() * 100);

  return number;
}

var charPool = "";

var userPass = "";

var divisionNumb = 0

function createPassword(){

  //Prompts

  var passLength = prompt("Choose a length beetween 8 and 128.");

  var lowerCase = prompt("If want lower case character type 'yes'.");

  var uppperCase = prompt("If want upper case character type 'yes'.");

  var number =  prompt("If want numbers type 'yes'.");

  var special = prompt("If want special character type 'yes'.");

  //Shuffle

  

  if(lowerCase === "yes"){

    divisionNumb = divisionNumb + 1;

    lowerCaseFunc = lowerCaseChars;

  }

  if(uppperCase === "yes"){

    divisionNumb = divisionNumb + 1;

    upperCaseFunc = upperCaseChars;

  }

  if(number === "yes"){

    divisionNumb = divisionNumb + 1;

    numberFunc = numbersChars;

  }

  if(special === "yes"){

    divisionNumb = divisionNumb + 1;

    specialFunc = specialChars;

  }

  var divLength = Math.ceil(passLength/divisionNumb);

  if(lowerCase === "yes"){
    for(i = 0; i < divLength; i++){

        charPool += lowerCaseFunc[random()];
  
      }
  }

  if(uppperCase === "yes"){
    for(i = 0; i < divLength; i++){

        charPool += upperCaseChars[random()];

      }
  }

  if(number === "yes"){
    for(i = 0; i < divLength; i++){

        charPool += numberFunc[random()];

      }
  }

  if(special === "yes"){
    for(i = 0; i < divLength; i++){

        charPool += specialFunc[random()];

      }
  }

  console.log(divLength);
  console.log(charPool);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  for(i = 0; i < passLength; i++){
    console.log(getRandomInt(0, Number(passLength)));
    userPass += charPool[getRandomInt(0, Number(passLength - 1))];

  }

}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = userPass;
  userPass = "";
  divisionNumb = 0;
  lowerCaseFunc = "";
  upperCaseFunc = "";
  numberFunc = "";
  specialFunc = "";
  charPool = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
generateBtn.addEventListener("click", writePassword);
