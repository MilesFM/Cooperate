function buttonsSetup() {
    menuButtonSetup();
    singlePlayerButtonSetup();
}

function menuButtonSetup() {
    activeScenes = [0];

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

    activeScenes = "all";
}

function singlePlayerButtonSetup() {
    activeScenes = [1];

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

    backButton = new genericButton(null, null, 100, 50, "Back");
    backButton.clickOnButton = () => {
        scene = 0;
    };

    activeScenes = "all";
}