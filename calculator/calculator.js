const button = document.querySelector(".grid");
const result = document.querySelector(".result");

button.addEventListener("click", function(event) {
  if (event.target.classList.contains("number")) {
  result.textContent = parseInt(event.target.textContent);
  } else if (event.target.classList.contains("c")) {
    clear();
  }
});

function clear() {
  result.textContent = parseInt(0);
}
