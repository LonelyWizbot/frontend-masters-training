const button = document.querySelector(".grid");
const result = document.querySelector(".result");

button.addEventListener("click", function(event) {
  if (event.target.classList.contains("number")) {
  result.textContent = event.target.textContent;
  }
});
