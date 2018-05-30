"use strict";

// Main Menu

let singlePlayerButton;
let multiplayerPlayerButton;
let aiButton;
let aboutButton;
let closeAboutButton;

let aboutPageShow = false;

let aboutTextFile = {text:null};

// Main Menu

let coopButton;
let defectButton;

let player1Money;
let aiMoney;

let player1Coop = null;
let aiCoop = null;

let player1StateLast = null;
 
let gameStateText = null; // Used to display winner (if competitive) or if the game has ended

let round = 0;

let cursorPos = new Vector2(0, 0);

let isPlaying = false;

let backButton; 