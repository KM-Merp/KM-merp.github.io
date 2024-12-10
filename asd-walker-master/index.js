/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    DOWN: 40,
    LEFT: 37,
    UP: 38,
    RIGHT: 39
  };
  var boardWidth = $("#board").width();
  var boardHeight = $("#board").height();
  // Game Item Objects
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
      console.log("down pressed");
    }
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
      console.log("left pressed");
    }
    if (event.which === KEY.UP) {
      walker.speedY = -5;
      console.log("up pressed");
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
      console.log("right pressed");
    }
  };
  function handleKeyUp(event) {
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
      console.log("down pressed");
    }
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
      console.log("left pressed");
    }
    if (event.which === KEY.UP) {
      walker.speedY = 0;
      console.log("up pressed");
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
      console.log("right pressed");
    }
  };

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
  };
  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  };
  function wallCollision() {
    if (walker.x < 0) {
       walker.speedX = 0
      walker.x = 0
    }
    else if (walker.x > boardWidth) {
      walker.x = boardWidth
      walker.speedX = 0
    }
    if (walker.y < 0) {
      walker.y = 0
      walker.speedY = 0
    }
    else if (walker.y > boardHeight) {
      walker.y = boardHeight
      walker.speedY = 0
    }
  };
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  };
  
}
