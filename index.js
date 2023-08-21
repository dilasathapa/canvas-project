var canvas_container = document.querySelector('.paint-canvas'); // taking the board
var context = canvas_container.getContext('2d');
// making a context of 2d to draw on board

var color_picker = document.querySelector('.color-picker'); //using input color class
context.lineCap = 'round'; //making the stroke shape as round or square or empty

//on change event getting the value of color picked from the user
color_picker.addEventListener('change', (event) => {
  context.strokeStyle = event.target.value;
});

var line_range = document.querySelector('.line-range'); //taking the range of type input
var line_label = document.querySelector('.js-range-value'); //taking the range of label

line_range.addEventListener('input', (event) => {
  var width = event.target.value; //taking input value from user
  line_label.innerHTML = width; //assigning width to label
  context.lineWidth = width; //assigning the width to stroke
});

var x = 0;
var y = 0; //co-ordinates from where the user will draw
var ismouseDown = false; //declaring a variable to check whether the mouse is held down or not // gonna be a boolean value


var stopDrawing = () => {
  ismouseDown = false;
};


var startDrawing = (event) => {
  ismouseDown = true;
  [x, y] = [event.offsetX, event.offsetY];
  // console.log(event.offsetX, event.clientX)
  // he event.offsetX property represents the horizontal coordinate (in pixels) of the mouse pointer within the target element (in this case, the canvas).
  // The event.offsetY property represents the vertical coordinate (in pixels) of the mouse pointer within the target element.
};


var drawLine = (event) => {
  if (ismouseDown) {
    var newX = event.offsetX;
    var newY = event.offsetY;
    console.log("new", newX, newY)
    context.beginPath();
    // This line starts a new path. A path is a series of connected lines and curves that can be drawn using the canvas context.
    context.moveTo(x, y);
    // This line moves the "pen" (or drawing cursor) to the starting point of the line. The starting point is the position where the mouse button was initially pressed down.
    context.lineTo(newX, newY);
    // This line defines the end point of the line by specifying the newX and newY coordinates captured from the current mouse position.
    context.stroke();
    // This line actually draws the line between the starting point and the end point defined using moveTo() and lineTo(). The stroke() method is responsible for rendering the line on the canvas.
    x = newX; //changing the initial position to a new position
    y = newY; //changing the same
    console.log(x, y)
  }
};




canvas_container.addEventListener('mousedown', startDrawing);
canvas_container.addEventListener('mousemove', drawLine);

canvas_container.addEventListener('mouseup', stopDrawing);
canvas_container.addEventListener('mouseout', stopDrawing);
