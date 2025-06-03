const button = document.querySelector(".grid");
const result = document.querySelector(".result");

let firstNumber = "";
let calculation = "";

button.addEventListener("click", function(event) {
  if (event.target.classList.contains("number") && result.textContent === "0") {
  result.textContent = event.target.textContent;
  } else if (event.target.classList.contains("number")) {
    result.textContent += event.target.textContent;
  } else if (event.target.classList.contains("c")) {
    clear();
  } else if (event.target.classList.contains("arrow")) {
    arrow();
  } else if (event.target.classList.contains("divide")) {
    divide();
  } else if (event.target.classList.contains("mult")) {
    mult();
  } else if (event.target.classList.contains("minus")) {
    minus();
  } else if (event.target.classList.contains("plus")) {
    plus();
  } else if (event.target.classList.contains("equals")) {
    equals();
  };
});

function clear() {
  result.textContent = 0;
};

function arrow() {
  result.textContent = result.textContent.slice(0, -1);
  if (result.textContent === "") {
    result.textContent = 0;
  }
};

function divide() {
  firstNumber = result.textContent;
  calculation = "÷";
};

function mult() {
  firstNumber = result.textContent;
  calculation = "x";
};

function minus() {
  firstNumber = result.textContent;
  calculation = "-";
};

function plus() {
  firstNumber = result.textContent;
  calculation = "+";
};

function equals() {
  if (calculation === "÷" && result.textContent !== "0") {
    result.textContent = parseInt(firstNumber) / parseInt(result.textContent);
  } else if (calculation === "÷" && result.textContent === "0") {
    firstNumber = "";
    calculation = "";
  } else if (calculation === "x") {
    result.textContent = parseInt(firstNumber) * parseInt(result.textContent);
  } else if (calculation === "-") {
    result.textContent = parseInt(firstNumber) - parseInt(result.textContent);
  } else if (calculation === "+") {
    result.textContent = parseInt(firstNumber) + parseInt(result.textContent);
  };
};
