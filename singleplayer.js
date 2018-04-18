function singlePlayerDraw() {
    // Background
    drawSquare(0, 0, canvas.width, canvas.height, "#000");

    coopButton.x = (canvas.width / 2) - coopButton.w/2 - 150;
    coopButton.y = (canvas.height / 2) - coopButton.h/2 - 50;
    coopButton.draw();

    defectButton.x = (canvas.width / 2) - defectButton.w/2 + 150;
    defectButton.y = (canvas.height / 2) - defectButton.h/2 - 50;
    defectButton.draw();

    drawText(`My total money: $${player1Money}`, 2, 25, "cyan", "25px Arial", "left");
    drawText(`AI total money: $${aiMoney}`, canvas.width-2, 25, "red", "25px Arial", "right");

    drawText("SINGLEPLAYER WIP", canvas.width/2, canvas.height/2-125, "red", "50px Arial", "center");
}

function singlePlayerStart() {
    player1Money = 2000;
    aiMoney = 2000;
}

function aiVsPlayer() {
    aiCoop = ai(player1Coop, aiMoney, player1Money);
    if (player1Coop && aiCoop) {
        player1Money += 25;
        aiMoney += 25;
    } else if (player1Coop && !aiCoop) {
        player1Money -= 50;
        aiMoney += 100;
    } else if (!player1Coop && aiCoop) {
        aiMoney -= 50;
        player1Money += 100;
    } else {
        aiMoney -= 25;
        player1Money -= 25;
    }
}