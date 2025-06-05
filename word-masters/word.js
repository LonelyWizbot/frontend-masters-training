let testerInputs = document.querySelectorAll(".tester-input");

/*
let answer = "";
*/

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
};

/*
function answerWord() {
  answer += testerInput.innerText;
};
*/

/*
function validateAnswer(answer) {
  if (testerInput.length === 5) {
  validaaaaaate;
  let answer = "";
  } else {
    event.preventDefault();
  }
};
*/

testerInputs.forEach(input => {
  input.addEventListener("keydown", (event) => {
    if (!isLetter(event.key)) {
      event.preventDefault();
    } else {
      console.log("This is a letter")
    };
  });

  input.addEventListener("input", () => {
    if (input.nextElementSibling === null) {
      console.log("Click enter to validate word")
    } else if (input.className === input.nextElementSibling.className) {
      input.nextElementSibling.focus();
    } else {
      console.log("Click enter to validate word")
    }
  });
});
