"use strict";

// Game setup
function start() {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", mouseMove);

    getAIScript("./aiScripts/defectdefect-coopcoop.js");

    getFile("./text/about.txt", aboutTextFile);

    buttonsSetup();
}

// Game rendering
function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    switch (scene) {
        case -1:
            testDraw();
            break;
        case 0:
            menuDraw();
            break;
        case 1:
            singlePlayerDraw();
            break;
        default:
            // Background
            drawSquare(0, 0, canvas.width, canvas.height, "#000");
    }
    drawImage("./assets/Cursor.png", cursorPos.x, cursorPos.y, 16, 16);
}

// Main Menu scene
function menuDraw() {
    // Background
    drawSquare(0, 0, canvas.width, canvas.height, "#000");
    
    singlePlayerButton.drawCentre(0, -125);
    multiplayerPlayerButton.drawCentre(0, -25);
    aiButton.drawCentre(0, 75);
    aboutButton.drawCentre(0, 175);

    drawText("Cooperate", canvas.width/2, canvas.height/2-200, "red", "50px Arial", "centre");

    if (aboutPageShow) {
        drawSquare(canvas.width/5, canvas.height/5, canvas.width - (canvas.width/2.5), canvas.height - (canvas.height/2.5), "darkgrey");

        closeAboutButton.x = (canvas.width / 2) - (closeAboutButton.w/2);
        closeAboutButton.y = (canvas.height / 2) + 100;
        closeAboutButton.draw();

        drawText(aboutTextFile.text, 300, 300, "blue", "10px Arial", "left");
        //wrapText({text: textFile.text, x: 300, y: 300, style: "blue", font: "40px Arial", textAlign: "left"}, 5, 5);
    }
}