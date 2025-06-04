let answer = document.querySelector(".tester-input");

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

answer.addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault();
  } else {
    console.log("this is a letter")
  };
});
