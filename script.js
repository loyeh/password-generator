const copy = document.getElementById("copy");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const length = document.getElementById("length");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const password = document.getElementById("password");
const generate = document.getElementById("generate");

let passwordLength = 8;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVYXYZ";
let numbersArr = "0123456789";
let symbolsArr = "!@#$%^&*-+|/><~";
let passwordText = "";
let characters = "";

length.addEventListener("input", () => {
  passwordLength = length.value;
});

lower.addEventListener("click", () => {
  if (lower.checked) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowerCase = "";
  }
});

upper.addEventListener("click", () => {
  if (upper.checked) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVYXYZ";
  } else {
    upperCase = "";
  }
});

numbers.addEventListener("click", () => {
  if (numbers.checked) {
    numbersArr = "0123456789";
  } else {
    numbersArr = "";
  }
});

symbols.addEventListener("click", () => {
  if (symbols.checked) {
    symbolsArr = "!@#$%^&*(){}[]=<>/,.";
  } else {
    symbolsArr = "";
  }
});

function passwordGenerator(length) {
  let result = "";

  characters = lowerCase + upperCase + numbersArr + symbolsArr;
  let charactersLength = characters.length;

  while (result.length < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  password.textContent = result;
}

function copyPassword() {
  if (!password) {
    return;
  }
  // Copy the text inside the text field
  navigator.clipboard.writeText(password.textContent);

  // Alert the copied text
  alert("Copied the text: " + password.textContent);
}

copy.addEventListener("click", copyPassword);
generate.addEventListener("click", () => passwordGenerator(passwordLength));
