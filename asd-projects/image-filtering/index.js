// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify)



  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i = i + 1) {
    console.log(image[i])
    for (var j = 0; j < image[i].length; j = j + 1) {
      var rgbString = image[i][j]
      filterFunction(rgbNumbers)
      rgbArrayToString(rgbNumbers)
      console.log(image[i][j])
    }
  }

}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var colorio = image[i][j]
  for (var i = 0; i < image.length; i = i + 1) {
    console.log(image[i])
    for (var j = 0; j < image[i].length; j = j + 1) {
      if (colorio !== image[i][j]) {
        var rgbString = image[i][j]
        filterFunction(rgbNumbers)
        rgbArrayToString(rgbNumbers)
      }
      console.log(image[i][j])
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(awa) {
  if (awa < 0) {
    return 0
  }
  if (awa > 255) {
    return 255
  }
  if (awa > 0 && awa < 255) {
    return awa
  }
}

// TODO 3: Create reddify function
function reddify(awa) {
  rgbNumbers[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(awa) {
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] - 50)
}
function increaseGreenByBlue(awa) {
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers[BLUE] + rgbNumbers[GREEN])
}

// CHALLENGE code goes below here
