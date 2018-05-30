"use strict";

function singlePlayerDraw() {
    // Background
    drawSquare(0, 0, canvas.width, canvas.height, "#000");

    if (isPlaying) {
        coopButton.disabled = false;
        defectButton.disabled = false;
    } else {
        coopButton.disabled = true;
        defectButton.disabled = true;
    }

    backButton.x = 10;
    backButton.y = 50;
    backButton.draw();

    coopButton.drawCentre(-150, -50);
    defectButton.drawCentre(150, -50)

    drawText(`My total money: $${player1Money}`, 2, 25, "cyan", "25px Arial", "left");
    drawText(`AI total money: $${aiMoney}`, canvas.width-2, 25, "red", "25px Arial", "right");

    if (options.mode === 0) {
        if (gameStateText === "AI") {
            drawText("AI WON", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
        } else if (gameStateText === "PLAYER") {
            drawText("PLAYER WON", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
        } else if (gameStateText === "DRAW") {
            drawText("DRAW", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
        } else {
            drawText("SINGLEPLAYER", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
        }
    } else if (options.mode === 1 && round >= options.noncompetitive.roundLimit) {
        drawText("ROUND ENDED", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
        isPlaying = false;
    } else {
        drawText("SINGLEPLAYER", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
    }
}

function singlePlayerStart() {
    switch (options.mode) {
        case 0: // Competitive
            player1Money = options.competitive.startCost;
            aiMoney = options.competitive.startCost; 
            break;
        case 1: // Noncompetitive
            player1Money = options.noncompetitive.startCost;
            aiMoney = options.noncompetitive.startCost; 
            round = 0;
            break;        
    }
    gameStateText = null;
    isPlaying = true;
    player1StateLast = null;
    getAIScript(options.startingaiScript);
}

function aiVsPlayer() {
    try {
        aiCoop = ai(player1StateLast, aiMoney, player1Money);
    } catch(err) {
        console.error(err);
    }

    switch (options.mode){
        case 0:
            checkRoundWinner(options.competitive);

            if (((aiMoney >= 3000) && (player1Money >= 3000)) || ((aiMoney <= 0) && (player1Money <= 0))) {
                gameStateText = "DRAW";
                isPlaying = false;
            } else if ((player1Money <= 0) || (aiMoney >= 3000)) {
                gameStateText = "AI";
                isPlaying = false;
            } else if ((aiMoney <= 0) || (player1Money >= 3000)) {
                gameStateText = "PLAYER";
                isPlaying = false;
            } else {
                gameStateText = null;
            }
            break;
        case 1:
            checkRoundWinner(options.noncompetitive);
            round++;
            break;
    }

    player1StateLast = player1Coop;
}

function checkRoundWinner(roundOptions) {
    if (player1Coop && aiCoop) {
        player1Money += roundOptions.coopcoop;
        aiMoney += roundOptions.coopcoop;
    } else if (player1Coop && !aiCoop) {
        player1Money += roundOptions.betrayed;
        aiMoney += roundOptions.betray;
    } else if (!player1Coop && aiCoop) {
        aiMoney += roundOptions.betrayed;
        player1Money += roundOptions.betray;
    } else {
        aiMoney += roundOptions.defectdefect;
        player1Money += roundOptions.defectdefect;
    }
}