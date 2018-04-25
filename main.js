"use strict";

// Game setup
function start() {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", mouseMove);

    getAIScript("aiScripts/defectdefect-coopcoop.js");

    buttonsSetup();
}

// Game logic
function update() {
}

// Game rendering
function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    switch (scene) {
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

    singlePlayerButton.x = (canvas.width / 2) - singlePlayerButton.w/2;
    singlePlayerButton.y = (canvas.height / 2) - singlePlayerButton.h/2  - 125;
    singlePlayerButton.draw();

    multiplayerPlayerButton.x = (canvas.width / 2) - multiplayerPlayerButton.w/2;
    multiplayerPlayerButton.y = (canvas.height / 2) - multiplayerPlayerButton.h/2  - 25;
    multiplayerPlayerButton.draw();

    aiButton.x = (canvas.width / 2) - aiButton.w/2;
    aiButton.y = (canvas.height / 2) - aiButton.h/2  + 75;
    aiButton.draw();

    aboutButton.x = (canvas.width / 2) - aboutButton.w/2;
    aboutButton.y = (canvas.height / 2) - aboutButton.h/2  + 175;
    aboutButton.draw();

    drawText("Cooperate", canvas.width/2, canvas.height/2-200, "red", "50px Arial", "centre");

    if (aboutPageShow) {
        drawSquare(canvas.width/5, canvas.height/5, canvas.width - (canvas.width/2.5), canvas.height - (canvas.height/2.5), "darkgrey");

        closeAboutButton.x = (canvas.width / 2) - (closeAboutButton.w/2);
        closeAboutButton.y = (canvas.height / 2) + 100;
        closeAboutButton.draw();

        //wrapText({text: "you aint working thing", x: 300, y: 300, style: "blue", font: "40px Arial", textAlign: "left"}, 20, 15);
    }
}

function buttonsSetup() {
    // Main Menu

    singlePlayerButton = new genericButton(null, null, 260, 75, "Singleplayer");
    singlePlayerButton.clickOnButton = () => {
        singlePlayerStart();
        scene = 1;
    };

    multiplayerPlayerButton = new genericButton(null, null, 260, 75, "Multiplayer");
    multiplayerPlayerButton.disabled = true;

    aiButton = new genericButton(null, null, 260, 75, "AI Script");
    aiButton.disabled = true;

    aboutButton = new genericButton(null, null, 260, 75, "About");
    aboutButton.clickOnButton = () => {
        aboutPageShow = true;
    };

    closeAboutButton = new genericButton(null, null, 208, 60, "Close");
    closeAboutButton.clickOnButton = () => {
        aboutPageShow = false;
    };

    // Main Menu

    // Singleplayer

    coopButton = new genericButton(null, null, 225, 75, "Cooperate");
    coopButton.clickOnButton = () => {
        player1Coop = true;
        aiVsPlayer();
    }
    defectButton = new genericButton(null, null, 225, 75, "Defect");
    defectButton.clickOnButton = () => {
        player1Coop = false;
        aiVsPlayer();
    }

    // Singleplayer
}