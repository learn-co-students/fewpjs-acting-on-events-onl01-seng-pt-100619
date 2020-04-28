// Your code here

let dodger = document.getElementById('dodger')

function moveDodgerLeft () {
    let numberS = dodger.style.left.replace("px", "");
    let number = parseInt(numberS, 10);

    if (number > 0) {
        let newNumber = number - 1;
        dodger.style.left = `${newNumber}px`;
    }
}

function moveDodgerRight () {
    let numberS = dodger.style.left.replace("px", "");
    let number = parseInt(numberS, 10);

    if (number < 360) {
        let newNumber = number + 1;
        dodger.style.left = `${newNumber}px`;
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else  {
        moveDodgerRight();
    }
});

