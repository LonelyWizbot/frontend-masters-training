const button = document.querySelector(".grid");
const result = document.querySelector(".result");

button.addEventListener("click", function(event) {
  result.textContent = event.target.textContent;
});
