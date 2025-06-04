function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

console.log(isLetter("a")); // true
console.log(isLetter("abc")); // false, not a single character
console.log(isLetter("1")); // false, not a number
