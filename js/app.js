const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const randomChar = function (set) {
  const randomNumber = Math.floor(Math.random() * set.length);
  return set[randomNumber];
};

const passBox = document.querySelector("#password");
const generate = document.querySelector("#generate");
const inputs = document.querySelectorAll(".input");

const generatePassword = function (password = "") {
  if (inputs[1].checked) {
    password += randomChar(upperSet);
  }
  if (inputs[2].checked) {
    password += randomChar(lowerSet);
  }
  if (inputs[3].checked) {
    password += randomChar(numberSet);
  }
  if (inputs[4].checked) {
    password += randomChar(symbolSet);
  }
  if (password.length < inputs[0].value) {
    return generatePassword(password);
  }
  password = password.slice(0, inputs[0].value);
  passBox.value = password;
  return password;
};

generate.addEventListener("click", () => {
  generatePassword();
});
