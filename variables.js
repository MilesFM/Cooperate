"use strict";

// Main Menu

let singlePlayerButton;
let multiplayerPlayerButton;
let aiButton;
let aboutButton;
let closeAboutButton;

let aboutPageShow = false;

// Main Menu

let coopButton;
let defectButton;

let player1Money;
let aiMoney;

let player1Coop = null;
let aiCoop = null;

let player1StateLast = null;
 
let winner = null;

let cursorPos = new Vector2(0, 0);

let isPlaying = false;