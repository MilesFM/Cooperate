"use strict";

// Game setup
function start() {
    let music = new Audio("./The-Curtain-Rises.mp3");
    music.play();
}

// Game logic
function update() {

}

// Game rendering
function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawSquare(0, 0, canvas.width, canvas.height, "#000");

    drawText("Cooperate", canvas.width/2, canvas.height/2-200, "red", "50px Arial", "center")
}