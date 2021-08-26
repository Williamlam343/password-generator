// var x = 20; //x is the number of characters in pw
//booleans returned from user determines the pwlist array
// var a = true; //uppercase
// var b = true; //number
// var c = false; //special char
// var d = false; //lowercase


var generateBtn = document.querySelector("#generate");

function pwgenerator() {

  let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let spchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "="];

  //* Creating list of characters for password
  let pwlist = [];


  var length = prompt("How long would you like your password to be? (between 8-128 characters)");

  //length is between 8 and 128 chars
  if (length >= 8 && length <= 128) {
    //ask the user what characters to include
    var a = confirm("Would you like to use upper case characters?");
    var b = confirm("Would you like to use numeric characters?");
    var c = confirm("Would you like to use special characters?");
    var d = confirm("Would you like to use lower characters?");

    if (!a && !b && !c && !d) {
      alert("At least one character type must be selected"); return ""
    };

    //Makes a pwlist of characters the pw generator will pull from

    //uppercase true if true adds upper into pwlist
    a == true ? (pwlist = [...upper, ...pwlist]) : "";

    //numbers true if true adds num into pwlist
    b == true ? (pwlist = [...num, ...pwlist]) : "";

    //special char if true adds spchar in pwlist
    c == true ? (pwlist = [...spchar, ...pwlist]) : "";

    //lower if true adds lower into pwlist
    d == true ? (pwlist = [...lower, ...pwlist]) : "";


  } else {
    alert(`${length} is not between 8 and 128`); return ""
  }

  //* Generating the Password
  //I need to pick a random number between 0 and pwlist length, x times to put into pwlist[]
  let l = pwlist.length;
  let generatedpw = "";

  function pwmaker() {
    for (let i = 0; i < length; i++) {
      //n = random number that will be plugged into pwlist[n] n = number between 0 and l
      let min = 0;
      let max = l;
      n = Math.floor(Math.random() * (min - max)) + max;
      //use n as a index to call an array value that is added into generated pw
      generatedpw += pwlist[n];
    }
  };


  //* Conditions checker
  //I want to check to make sure the generatedpw meets all parameters set by the user
  //if true/true run into pwmaker function again; if true/false check next condition: if false/false check next condition
  //if any characters of .some is included in the generatedpw returns true

  //checks to see if the generated pw contains uppercase character
  while (a == true && !upper.some((r) => generatedpw.includes(r))) { generatedpw = ""; pwmaker(); };
  //checks to see if the generated pw contains number
  while (b == true && !num.some((r) => generatedpw.includes(r))) { generatedpw = ""; pwmaker(); };
  //checks to see if the generated pw contains special character
  while (c == true && !spchar.some((r) => generatedpw.includes(r))) { generatedpw = ""; pwmaker(); };
  //checks to see if generated pw contains lowercase
  while (d == true && !lower.some((r) => generatedpw.includes(r))) { generatedpw = ""; pwmaker(); };


  //if all conditions are met returns generatedpw
  return generatedpw

}

// Write password to the #password input
function writePassword() {
  // What is the difference between return and console log?
  // What happens if we console log our password instead of returning it?
  var password = pwgenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);