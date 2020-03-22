var canvasWidth = 400;
var canvasHeight = 300;
function main(csvData, header) {
  //Dynamic points
  var canvasId = document.getElementById("canvasId");
  var context = canvasId.getContext("2d");
  var tCounter = 1;
  context.lineWidth = 5;
  // This section of code actually gives the ability to draw the line graph
  context.strokeStyle = "maroon";
  context.beginPath();
  context.moveTo(10, 300 - 3 * csvData[0]);
  for (tempCounter in csvData)
    context.lineTo(
      Math.floor(canvasWidth / 22) * tCounter++,
      Math.floor(
        (canvasHeight / 100) * (100 - csvData[tempCounter]["Temperature"])
      )
    );
  context.stroke();
}
function displayFile() {
  // Inspiration for this demo comes from
  // Gravelle, Robert. "Read Text Files Using the Javascript FileReader." n.d.
  // 		Retrieved from https://www.htmlgoodies.com/beyond/javascript/read-text-files-using-the-javascript-filereader.html 13 Oct 2017.
  // Zakas, Nicholas C. "Working with Files in Javascript, part 2." 15 May 2012.
  //		Retrieved from https://www.nczonline.net/blog/2012/05/15/working-with-files-in-javascript-part-2/ 13 Oct 2017.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    //Retrieve the first (and only!) File from the FileList object
    var fileObject = document.getElementById("filePicker").files[0];

    if (!fileObject) {
      alert("Failed to load file");
    } else if (!fileObject.name.match(".csv")) {
      alert(fileObject.name + " is not a valid csv file.");
    } else {
      var filePointer = new FileReader();
      filePointer.onload = function(event) {
        var csvData = [];
        var csvLines = event.target.result.split("\r\n");
        var header = csvLines[0].split(",");
        // This for loop will create an array which counts the number of lines within the csv data
        for (
          var lineCounter = 1;
          lineCounter < csvLines.length;
          lineCounter++
        ) {
          var thisRow = csvLines[lineCounter].split(",");
          csvData[thisRow[0]] = [];
          for (
            var fieldCounter = 1;
            fieldCounter < thisRow.length;
            fieldCounter++
          ) {
            csvData[thisRow[0]][header[fieldCounter]] = thisRow[fieldCounter];
          }
        }
        main(csvData, header);
      };
      filePointer.readAsText(fileObject);
    }
    //This provides an alert if your file type is not the correct one for submission
  } else {
    alert("The File APIs are not fully supported by your browser.");
  }
}
