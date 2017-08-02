// external js: masonry.pkgd.js

var $grid = $(".grid").masonry({
  columnWidth: 160,
  itemSelector: ".grid-item"
});

// $(document).ready(function() {
//   var elems = getItemElement();
//   var $elems = $(elems);
//   $grid.prepend($elems).masonry("prepended", $elems);
// });
$(document).ready(function() {
  //use file for now will integrate with DB later
  var data = $.getJSON("TestData.json", function(data) {
    //Iterate through data and add to page
    $.each(data, function(n, element) {
      var frame = createFrame(element);
      var $frameToAdd = $(frame);
      $grid.prepend($frameToAdd).masonry("prepended", $frameToAdd);
    });
  });
});

function createFrame(data) {
  //<div><a href=""><img src=""><div> </div></img></a></div>
  var div = document.createElement("div");

  console.log("Now processing for: " + data.caption);

  $(data.img).load(function() {
    var w = $(this).width();
    console.log("Width Calcualted for Picture " + data.img + " is " + w);
    var h = $(this).height();
    console.log("Width Calcualted for Picture " + data.img + " is " + h);
    //classify image class based on size
    var widthClass =
      wRand > 0.8
        ? "grid-item--width3"
        : wRand > 0.6 ? "grid-item--width2" : "";
    var heightClass =
      hRand > 0.85
        ? "grid-item--height4"
        : hRand > 0.6
          ? "grid-item--height3"
          : hRand > 0.35 ? "grid-item--height2" : "";
    console.log("Width class is: " + widthClass);
    console.log("Height Class is: " + heightClass);

    //add class to image
    div.className = "grid-item " + widthClass + " " + heightClass;
    div.appendChild(
      '<a href="#" target="_blank"><img src="' +
        data.img +
        '" alt="Image"/></a>'
    );

    //return frame
    return div;
  });
}

// create <div class="grid-item"></div>
function getItemElement() {
  var elem = document.createElement("div");
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass =
    wRand > 0.8 ? "grid-item--width3" : wRand > 0.6 ? "grid-item--width2" : "";
  var heightClass =
    hRand > 0.85
      ? "grid-item--height4"
      : hRand > 0.6
        ? "grid-item--height3"
        : hRand > 0.35 ? "grid-item--height2" : "";
  elem.className = "grid-item " + widthClass + " " + heightClass;
  return elem;
}
