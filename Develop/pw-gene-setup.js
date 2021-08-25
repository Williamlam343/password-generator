var x = 20; //x is the number of characters in pw
//booleans returned from user determines the pwlist array
var a = true; //uppercase
var b = true; //number
var c = true; //special char

function pwgenerator() {
  let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let spchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  //* Creating list of characters for password
  let pwlist = [];

  //x is between x and 128 chars
  if (x >= 8 && x <= 128) {
    //Makes a pwlist of characters the pw generator will pull from

    //uppercase true/false
    a == true ? (pwlist = [...upper, ...pwlist]) : "";

    //numbers true/false
    b == true ? (pwlist = [...num, ...pwlist]) : "";

    //special chars true/false
    c == true ? (pwlist = [...spchar, ...pwlist]) : "";

    //lowercase is always included
    pwlist = [...lower, ...pwlist];
  } else {
    return `${x} is not between 8 and 128`;
  }

  //* Generating the Password
  //I need to pick a random number between 0 and pw list length, x times to put into pwlist[]
  let l = pwlist.length;
  let generatedpw = "";
  function pwmaker() {
    for (let i = 0; i < x; i++) {
      //n = random number that will be plugged into pwlist[n] n = number between 0 and l
      let min = 0;
      let max = l;
      n = Math.floor(Math.random() * (min - max)) + max;
      //use n as a index to call an array value that is added into generated pw
      generatedpw += pwlist[n];
    }
  }

  //* Conditions checker
  //if true/true invoke into for()loop again; if false check next condition

  //checks to see if the generated pw uppercase character
  a !== false && !upper.some((r) => generatedpw.includes(r))
    ? pwmaker()
    : //checks to see if the generated pw number
    b !== false && !num.some((r) => generatedpw.includes(r))
      ? pwmaker()
      : //checks to see if the generated pw contains special character
      c !== false && !spchar.some((r) => generatedpw.includes(r))
        ? pwmaker()
        : //if all conditions are met returns generated pw
        generatedpw;

  return generatedpw;
  //if all conditions are met then return generated password
}

console.log(pwgenerator());
