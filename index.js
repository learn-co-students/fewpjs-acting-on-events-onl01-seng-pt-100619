// Your code here
let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    console.log(e.key);
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
   
      dodger.style.left = `${left - 1}px`;
    }
  });

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left < 400) {
      dodger.style.left = `${left + 1}px`;
    }
  }
// use style left parameter to move element, convert values to int and back to string, use event listener, and set the move right or move left as callback
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
  });
