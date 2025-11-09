const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const valForm = document.getElementById("val-form");

const regex = /^(1\s*)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

const checkFunction = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else if (regex.test(userInput.value)) {
      results.textContent = `Valid US number: ${userInput.value}`;
      valForm.classList.remove("wrong");
      valForm.classList.add("right");
      userInput.value = "";
    } else {
      results.textContent = `Invalid US number: ${userInput.value}`;
      valForm.classList.remove("right");
      valForm.classList.add("wrong");
      userInput.value = "";
    }
  }

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkFunction();
  }
});

checkBtn.addEventListener("click", checkFunction);

clearBtn.addEventListener("click", () => {
  results.textContent = "";
  valForm.classList.remove("right", "wrong");
});