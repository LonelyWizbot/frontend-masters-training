const button = document.querySelector(".grid");
const result = document.querySelector(".result");

button.addEventListener("click", function(event) {
  if (event.target.classList.contains("number") && result.textContent === "0") {
  result.textContent = event.target.textContent;
  } else if (event.target.classList.contains("number")) {
    result.textContent += event.target.textContent;
  } else if (event.target.classList.contains("c")) {
    clear();
  } else if (event.target.classList.contains("arrow")) {
    arrow();
  }
});

function clear() {
  result.textContent = 0;
}

function arrow() {
  result.textContent = result.textContent.pop();
}
