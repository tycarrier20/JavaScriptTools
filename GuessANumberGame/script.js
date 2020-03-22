const min = 1;
const max = 100;
var g;
var randomNumber;
// This function will compare the user's guessed number with
// the generated random number. It will then notify the user
// whether their guess is too high, too low, or correct
function onClickGuess() {
  var tb1val = g.value;
  if (tb1val < randomNumber) alert("Too Low!");
  if (tb1val > randomNumber) alert("Too High!");
  if (tb1val == randomNumber) {
    alert("Correct!!");
    addNumberToDropdown();
  }
}
// This function will generate a new random number and thus
// aid the process of starting a new game for the user
function pickANewNumber() {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}
// This function aids in allowing the user to add the correctly
// guessed number to the a dropdown list
function addToList(listId, numberToAdd) {
  var dropdownElement = document.getElementById(listId);
  var dropdownOptions = dropdownElement.options;
  for (
    var optionNumber = 0;
    optionNumber < dropdownOptions.length;
    optionNumber++
  ) {
    if (dropdownOptions[optionNumber].text == numberToAdd) return;
  }
  var newOption = document.createElement("option");
  newOption.text = numberToAdd;
  newOption.value = numberToAdd;
  dropdownElement.add(newOption);
}
// This function aids in allowing the user to add the correctly
// guessed number to the a dropdown list
function addNumberToDropdown() {
  var numberToAdd = document.getElementById("textBox1").value;
  addToList("addNumberToDropdown", numberToAdd);
}
// This function aids in starting a new game by setting the "textBox1"
// to "0"
function onClickReset() {
  document.getElementById("textBox1").value = "0";
}
// This function calls upon two functions that will reset the "textBox1"
// value and pick a new random number, thus allowing the user to begin
// a new game
function newGame() {
  onClickReset();
  pickANewNumber();
}
// This function generates a random number
function main() {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  g = document.getElementById("textBox1");
}
