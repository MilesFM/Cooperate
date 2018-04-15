"use strict";

// Game setup
function start() {
    document.addEventListener("click", onClick);
    document.addEventListener("mousemove", mouseMove);

    buttonsSetup();
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

    singlePlayerButton.x = (canvas.width / 2) - singlePlayerButton.w/2;
    singlePlayerButton.y = (canvas.height / 2) - singlePlayerButton.h/2  - 125;
    singlePlayerButton.draw();

    drawText("Cooperate", canvas.width/2, canvas.height/2-200, "red", "50px Arial", "center");

    drawImage("./assets/Cursor.png", cursorPos.x, cursorPos.y, 16, 16);
}

function buttonsSetup() {
    singlePlayerButton = new genericButton(null, null, 260, 75, "Single Player");
}