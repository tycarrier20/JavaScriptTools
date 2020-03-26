function calcCmToIn() {
  var cmInputBox = document.getElementById("cmInput");
  var inOutputBox = document.getElementById("inOutput");
  var cmInputValue = cmInputBox.value;
  inOutputBox.value = cmInputValue / 2.54;
}
function calcInToFt() {
  var inInputBox = document.getElementById("inInput");
  var ftOutputBox = document.getElementById("ftOutput");
  var inInputValue = inInputBox.value;
  ftOutputBox.value = inInputValue / 12;
}
function calcFtToYd() {
  var ftInputBox = document.getElementById("ftInput");
  var ydOutputBox = document.getElementById("ydOutput");
  var ftInputValue = ftInputBox.value;
  ydOutputBox.value = ftInputValue / 3;
}
function calcYdToM() {
  var ydInputBox = document.getElementById("ydInput");
  var mOutputBox = document.getElementById("mOutput");
  var ydInputValue = ydInputBox.value;
  mOutputBox.value = ydInputValue / 1.09361;
}
