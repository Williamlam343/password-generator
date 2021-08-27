//targets the generate button
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
  if (length == "tofu" || length >= 8 && length <= 128) {

    //ask the user what characters to include
    if (length == "tofu") { alert(`${length} is a boomer`); return "" }


    var upperCase = confirm("Would you like to use uppercase characters?");
    var numeric = confirm("Would you like to use numeric characters?");
    var spCharacter = confirm("Would you like to use special characters?");
    var lowerCase = confirm("Would you like to use lowercase characters?");

    //if no characters is selected alert to start over
    if (!upperCase && !numeric && !spCharacter && !lowerCase) {
      alert("At least one character type must be selected"); return ""
    };

    //Makes a pwlist of characters the pw generator will pull from

    //uppercase if true adds upper into pwlist
    upperCase == true ? (pwlist = [...upper, ...pwlist]) : "";

    //numbers if true adds num into pwlist
    numeric == true ? (pwlist = [...num, ...pwlist]) : "";

    //specialchar if true adds spchar in pwlist
    spCharacter == true ? (pwlist = [...spchar, ...pwlist]) : "";

    //lower if true adds lower into pwlist
    lowerCase == true ? (pwlist = [...lower, ...pwlist]) : "";


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
      let max = l;
      n = Math.floor(Math.random() * max);
      //use n as a index to call an array value that is added into generated pw
      generatedpw += pwlist[n];
    }
  };

  //* Conditions checker
  //I want to check to make sure the generatedpw meets all parameters set by the user
  //if true/true run into pwmaker function again; if true/false check next condition: if false/false check next condition
  //if any characters of .some is included in the generatedpw returns true


  //checks to see if the generatedpw conditions all characters user set
  while (a == true && !upper.some(r => generatedpw.includes(r)) || (b == true && !num.some(r => generatedpw.includes(r)) || c == true && !spchar.some(r => generatedpw.includes(r)) || d == true && !lower.some(r => generatedpw.includes(r)))) { generatedpw = ""; pwmaker(); };
  //if all conditions are met returns generatedpw
  return generatedpw

}

// Write password to the #password input
function writePassword() {
  var password = pwgenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);