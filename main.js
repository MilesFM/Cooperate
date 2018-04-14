"use strict";

// Game setup
function start() {
    document.addEventListener("click", onClick);
    button1 = new genericButton(200, 200, 100, 50, "thing");
}

// Game logic
function update() {

}

// Game rendering
function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Background
    drawSquare(0, 0, canvas.width, canvas.height, "#000");

    button1.draw();

    drawText("Cooperate", canvas.width/2, canvas.height/2-200, "red", "50px Arial", "center");
}