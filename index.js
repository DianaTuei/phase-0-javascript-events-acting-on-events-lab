// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Assuming the game field width is 400px, adjust the value accordingly
    const maxWidth = 400;

    if (left < maxWidth - 40) {
        // Prevent the dodger from escaping off the right-hand side (considering dodger width of 40px)
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});