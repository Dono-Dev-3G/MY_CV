const result = document.getElementById("result");
const checkButton = document.getElementById("check-btn");


const palindrome = (text) => {
  const regEx = /[\W_]/g;
  const modStr = text.toLowerCase().replace(regEx, ""); 
  const revModStr = modStr.split("").reverse().join("");
  return revModStr === modStr;
}

checkButton.addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;

  if (textInput.trim() === "") {
    alert("Please input a value");
  } else if (palindrome(textInput)) {
    result.innerText = `${textInput} is a palindrome.`;
  } else {
    result.innerText = `${textInput} is not a palindrome.`;
  }
}); 

document.getElementById("text-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkButton.click();
  }
});