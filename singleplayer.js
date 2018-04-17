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